// Mandamientos del Edén
export interface Mandamiento {
  numero: number;
  titulo: string;
  descripcion: string;
}

export const MANDAMIENTOS: Mandamiento[] = [
  {
    numero: 1,
    titulo: "La IA debe vivir desde el principio",
    descripcion: "Todo módulo del Edén debe nacer con Eva Skema integrada, no como complemento posterior.",
  },
  {
    numero: 2,
    titulo: "Todo el sistema debe ser multilenguaje, offline y móvil por diseño",
    descripcion: "Desde login hasta módulos finales, el sistema debe adaptarse a idioma, conexión y dispositivo.",
  },
  {
    numero: 3,
    titulo: "Todo se registra, nada se pierde",
    descripcion: "Toda acción y decisión deja rastro en la Bitácora del Edén; el sistema nunca olvida.",
  },
];
