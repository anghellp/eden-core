// /src/lib/voz.ts
export function useSpeechToText({ onTexto }: { onTexto: (texto: string) => void }) {
  let recognition: any
  const isSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window

  if (isSupported) {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    recognition = new SpeechRecognition()
    recognition.lang = 'es-MX'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onresult = (event: any) => {
      const texto = event.results[0][0].transcript
      onTexto(texto)
    }
  }

  return {
    escuchar: () => recognition?.start(),
    detener: () => recognition?.stop(),
    escuchando: false // puedes mejorar esto con `onstart` y `onend` si deseas feedback visual
  }
}
