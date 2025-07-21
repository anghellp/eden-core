// Tablas del Edén – Módulo visual sagrado
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { MANDAMIENTOS } from "@/constants/mandamientos";

export default function TablasDelEden() {
  return (
    <ScrollArea className="h-full w-full p-4">
      <div className="space-y-4">
        {MANDAMIENTOS.map((mandamiento, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white/20 to-white/10 backdrop-blur dark:from-black/20 dark:to-black/10">
              <CardContent className="p-4 space-y-2">
                <Badge className="text-xs">Mandamiento #{mandamiento.numero}</Badge>
                <h3 className="text-lg font-bold">{mandamiento.titulo}</h3>
                <Separator />
                <p className="text-sm opacity-80">{mandamiento.descripcion}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  );
}
