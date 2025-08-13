// /api/eva/index.ts
import express from 'express'
import * as dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

// 🌱 Cargar variables de entorno
dotenv.config()

// 🔐 Validar claves de entorno
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('❌ Faltan SUPABASE_URL o SUPABASE_ANON_KEY en el archivo .env')
}

// 🌐 Instanciar Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const router = express.Router()

router.post('/', async (req, res) => {
  console.log('📥 Petición recibida en Eva Skema:', req.body)

  try {
    const { prompt, user_id, modulo } = req.body

    if (!prompt || !user_id || !modulo) {
      console.warn('⚠️ Datos faltantes:', { prompt, user_id, modulo })
      return res.status(400).json({ error: 'Faltan datos necesarios para Eva Skema' })
    }

    // 🧠 Recuperar contexto previo (usando 'pregunta' y 'respuesta')
    const { data: contextoData, error } = await supabase
      .from('eva_memoria')
      .select('pregunta, respuesta')
      .eq('usuario_id', user_id)
      .eq('modulo', modulo)
      .eq('contexto', 'EvaSkema')
      .order('id', { ascending: false })
      .limit(5)

    if (error) {
      console.error('⚠️ Error al obtener contexto desde Supabase:', error)
    }

    const contexto = contextoData
      ?.map((d) => `🧑 ${d.pregunta}\n🌱 ${d.respuesta}`)
      .reverse()
      .join('\n') || ''

    const promptFinal = contexto
      ? `Contexto previo:\n${contexto}\n\nNueva pregunta:\n${prompt}`
      : prompt

    // 🤖 Llamar a Ollama local
    let data
    try {
      const ollamaRes = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'openhermes',
          prompt: promptFinal,
          stream: false,
        }),
      })

      if (!ollamaRes.ok) {
        throw new Error(`❌ Ollama falló: ${ollamaRes.status} ${ollamaRes.statusText}`)
      }

      data = await ollamaRes.json()
    } catch (err) {
      console.error('❌ Error al llamar a Ollama:', err)
      return res.status(500).json({ error: 'Error al comunicarse con Ollama local' })
    }

    if (!data?.response) {
      console.warn('⚠️ Ollama respondió sin contenido útil:', data)
      return res.status(500).json({ error: 'Ollama no devolvió una respuesta válida' })
    }

    console.log('🧠 Eva respondió:', data.response)
    res.json({ respuesta: data.response })
  } catch (error) {
    console.error('❌ Error general en Eva Skema:', error)
    res.status(500).json({ error: 'Error interno al procesar la petición de Eva Skema' })
  }
})

export default router
