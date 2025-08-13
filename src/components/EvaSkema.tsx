// /src/components/EvaSkema.tsx
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { guardarMemoria } from '@/lib/eva/guardarMemoria'
import { supabase } from '@/lib/supabase'
import { Leaf, X, Maximize2, Minimize2, Globe, Bot } from 'lucide-react'

const MODELOS = ['gpt-4', 'gpt-3.5', 'llama3', 'mistral']

export default function EvaSkema() {
  const location = useLocation()
  const [historial, setHistorial] = useState<{ pregunta: string; respuesta: string }[]>([])
  const [pregunta, setPregunta] = useState('')
  const [usuarioId, setUsuarioId] = useState<string | null>(null)
  const [correo, setCorreo] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)
  const [expandido, setExpandido] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [modelo, setModelo] = useState(() => localStorage.getItem('eva_modelo') || 'gpt-4')
  const [modoInternet, setModoInternet] = useState(() => localStorage.getItem('eva_online') === 'true')
  const chatRef = useRef<HTMLDivElement>(null)

  if (location.pathname === '/login' || location.pathname === '/') return null

  useEffect(() => {
    const registrar = async () => {
      const { data } = await supabase.auth.getUser()
      const id = data?.user?.id || null
      const email = data?.user?.email || null
      if (!id) return
      setUsuarioId(id)
      setCorreo(email)

      await guardarMemoria({
        usuario_id: id,
        modulo: location.pathname,
        pregunta: 'Eva Skema activada',
        respuesta: '🌿 Eva Skema ya vive.',
        contexto: 'sistema',
      })
    }
    registrar()
  }, [location])

  useEffect(() => {
    setTimeout(() => {
      chatRef.current?.scrollTo(0, chatRef.current.scrollHeight)
    }, 100)
  }, [historial])

  const enviarPregunta = async () => {
    if (!pregunta || !usuarioId) return
    setCargando(true)
    try {
      const res = await fetch('/api/eva', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: pregunta,
          user_id: usuarioId,
          modulo: location.pathname,
          modelo,
          modoInternet,
        }),
      })
      const data = await res.json()
      const respuestaFinal = data.respuesta || 'No hubo respuesta de Eva.'
      setHistorial((prev) => [...prev, { pregunta, respuesta: respuestaFinal }])
      setPregunta('')
      await guardarMemoria({
        usuario_id: usuarioId,
        modulo: location.pathname,
        pregunta,
        respuesta: respuestaFinal,
        contexto: 'EvaSkema',
      })
    } catch {
      setHistorial((prev) => [...prev, { pregunta, respuesta: '⚠️ Error al conectar con Eva Skema.' }])
    } finally {
      setCargando(false)
    }
  }

  const toggleModo = () => {
    const nuevo = !modoInternet
    setModoInternet(nuevo)
    localStorage.setItem('eva_online', String(nuevo))
  }

  const cambiarModelo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = e.target.value
    setModelo(valor)
    localStorage.setItem('eva_modelo', valor)
  }

  return (
    <>
      <button
        aria-label="Eva Skema"
        className="fixed bottom-4 right-4 p-3 bg-emerald-600 rounded-full shadow-lg z-50 focus:outline-none animate-pulseAura"
        onClick={() => setVisible(!visible)}
      >
        <Leaf className="w-6 h-6 text-white" />
      </button>

      {visible && (
        <div className={`fixed bottom-24 right-4 w-[90vw] md:w-[28rem] ${expandido ? 'h-[90vh]' : 'h-[40rem]'} bg-white dark:bg-zinc-900 text-black dark:text-white p-4 rounded-xl shadow-xl z-50 flex flex-col`}>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">🌿 Eva Skema</h2>
            <div className="flex items-center gap-2">
              <button onClick={() => setExpandido(!expandido)} className="text-zinc-400 hover:text-zinc-100">
                {expandido ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button onClick={() => setVisible(false)} className="text-zinc-400 hover:text-red-500">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Ajustes */}
          <div className="flex justify-between items-center mb-3 gap-2 text-xs">
            <label className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              <select value={modelo} onChange={cambiarModelo} className="bg-zinc-200 dark:bg-zinc-800 rounded px-2 py-1">
                {MODELOS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <Globe className="w-4 h-4" />
              <span className="text-zinc-600 dark:text-zinc-300">Internet</span>
              <input type="checkbox" checked={modoInternet} onChange={toggleModo} className="ml-1" />
            </label>
          </div>

          {/* Historial */}
          <div ref={chatRef} className="flex-1 overflow-y-auto px-1 mb-3 space-y-3 text-sm scroll-smooth">
            {historial.map((msg, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-end">
                  <div className="max-w-[75%] bg-emerald-100 dark:bg-emerald-700 text-black dark:text-white p-2 rounded-lg text-right">
                    <div className="text-xs font-medium text-emerald-700 dark:text-emerald-200 mb-1">{correo || 'Tú'}</div>
                    {msg.pregunta}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[75%] bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
                    <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">Eva 🌿</div>
                    <div className="whitespace-pre-wrap">{msg.respuesta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Entrada */}
          <textarea
            className="w-full h-20 p-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 resize-none text-sm"
            placeholder="¿Qué deseas preguntarle a Eva?"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
          />

          <button
            onClick={enviarPregunta}
            disabled={cargando}
            className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-xl transition"
          >
            {cargando ? '⏳ Pensando...' : 'Preguntar'}
          </button>
        </div>
      )}
    </>
  )
}
