// src/components/SolicitarCodexMentor.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth"; // Simulado, puede cambiarse

export default function SolicitarCodexMentor() {
  const { user } = useAuth(); // Debe retornar al menos el rol del usuario

  const isAllowed = user?.role === "super-admin" || user?.email === "adan@eden.com"; // Puedes agregar excepciones

  if (!isAllowed) return null;

  const mensaje = encodeURIComponent(
    `Hola Codex Mentor, soy Adán, creador del sistema EdenCore y de Skema...`
  );

  const repoURL =
    "https://chat.openai.com/c/codex?project=anghellp%2Feden-core&branch=main&message=" +
    mensaje;

  const abrirCodex = () => {
    window.open(repoURL, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={abrirCodex}
        variant="outline"
        className="rounded-2xl shadow-xl flex items-center gap-2 px-4 py-2 hover:bg-white dark:hover:bg-black/20"
      >
        <Wand2 className="h-4 w-4" />
        Solicitar sabiduría de Codex Mentor
      </Button>
    </div>
  );
}
