import { MANDAMIENTOS_EDEN } from '@/constants/mandamientos'

export function TablasDelEden() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white p-4 text-sm font-mono z-50 shadow-md">
      <strong className="text-green-400">🕊️ Mandamientos del Edén:</strong>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {MANDAMIENTOS_EDEN.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  )
}
