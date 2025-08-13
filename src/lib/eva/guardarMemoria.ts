// /src/lib/eva/guardarMemoria.ts
import { supabase } from '@/lib/supabase'

interface RegistroMemoria {
  usuario_id: string
  modulo: string
  pregunta: string
  respuesta: string
  contexto?: string
}

export async function guardarMemoria(data: RegistroMemoria) {
  const { error } = await supabase.from('eva_memoria').insert([
    {
      usuario_id: data.usuario_id,
      modulo: data.modulo,
      pregunta: data.pregunta,
      respuesta: data.respuesta,
      contexto: data.contexto ?? 'EvaSkema',
    },
  ])

  if (error) {
    console.error('❌ Error al guardar en eva_memoria:', error)
  } else {
    console.log(`✅ Eva Skema registró memoria en el módulo ${data.modulo}`)
  }
}
