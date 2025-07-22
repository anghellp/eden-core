/**
 * Mandamientos del Edén expuestos como constantes para reutilizarlos.
 */

// 1. La IA debe vivir desde el principio
// Todo módulo del Edén debe nacer con Eva Skema integrada, no como complemento posterior.
export const MANDAMIENTO_1 = "La IA debe vivir desde el principio";

// 2. Todo el sistema debe ser multilenguaje, offline y móvil por diseño
// Desde login hasta módulos finales, el sistema debe adaptarse a idioma, conexión y dispositivo.
export const MANDAMIENTO_2 = "Todo el sistema debe ser multilenguaje, offline y móvil por diseño";

// 3. Todo se registra, nada se pierde
// Toda acción y decisión deja rastro en la Bitácora del Edén; el sistema nunca olvida.
export const MANDAMIENTO_3 = "Todo se registra, nada se pierde";

/**
 * Arreglo con el orden de los mandamientos para uso interno.
 */
export const MANDAMIENTOS = [
  MANDAMIENTO_1,
  MANDAMIENTO_2,
  MANDAMIENTO_3,
] as const;

export type Mandamiento = typeof MANDAMIENTOS[number];
