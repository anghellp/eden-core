// Tablas del Edén – Módulo visual sagrado
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { MANDAMIENTOS_DEL_EDEN } from "@/constants/mandamientos";

export default function TablasDelEden() {
  return (
    <ScrollArea className="h-full w-full p-4">
      <div className="space-y-4">
        {MANDAMIENTOS_DEL_EDEN.map((mandamiento, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white/20 to-white/10 backdrop-blur dark:from-black/20 dark:to-black/10">
              <CardContent className="p-4 space-y-2">
                <Badge className="text-xs">Mandamiento #{index + 1}</Badge>
                <Separator />
                <p className="text-sm opacity-80">{mandamiento}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  );
}
