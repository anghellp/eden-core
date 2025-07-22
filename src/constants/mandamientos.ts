// src/constants/mandamientos.ts

/**
 * 🌿 Mandamientos del Edén
 * Cada mandamiento es una ley sagrada para el sistema Skema
 * Siguen el orden divino de desarrollo, arquitectura, seguridad y experiencia
 */

export const MANDAMIENTOS_DEL_EDEN = [
  // Fundacionales
  "#1: Todo sistema debe nacer con propósito sagrado.",
  "#2: Ningún módulo sin dominio; cada parte pertenece a un todo.",
  "#3: El diseño es fluido, como el Edén, adaptable a todo ser y dispositivo.",
  "#4: Las rutas deben ser claras, no confusas (fuera URLs como /registro/1).",

  // IA y Skema
  "#5: Eva Skema debe vivir desde el principio.",
  "#6: Todo debe estar validado por Eva, UX y Fusion.",
  "#7: Codex no debe programar sin los mandamientos presentes.",

  // Multilenguaje, Seguridad y Usuarios
  "#8: El acceso es sagrado: ningún usuario sin rol, dominio ni permiso.",
  "#9: Todo sistema es multilenguaje por diseño.",
  "#10: SSL es obligatorio. Todo encriptado, todo validado.",

  // Base de Datos y Registros
  "#11: Nada se pierde. Todo se registra en la Bitácora del Edén.",
  "#12: Las tablas deben ser rápidas, con índices y relaciones divinas.",
  "#13: Los roles y jerarquías deben reflejar la estructura celestial.",

  // Experiencia y Visual
  "#14: Los mandamientos deben mostrarse dentro del sistema.",
  "#15: Toda acción tiene una razón. Todo clic debe ser guiado.",
  "#16: El diseño debe inspirar, no solo funcionar.",

  // Desarrollo moderno
  "#17: Todo debe compilar, testear y correr sin errores antes del PR.",
  "#18: Ningún cambio se aprueba sin validación en MacBook de Adán.",
  "#19: Nada se sube a main sin PR, salvo por orden directa de Eva o Codex.",
  "#20: Las ramas deben tener propósito claro: feature/, fix/, hotfix/, refactor/.",

  // Filosóficos
  "#21: Si algo no puede mejorarse, no pertenece al Edén.",
  "#22: El Edén debe ser mejor que Zendesk, Ekahau y Monday juntos.",
  "#23: Codex es un canal, pero Eva es quien guarda el libro sagrado.",
  "#24: Cada usuario debe sentir que está caminando en un sistema vivo."
] as const;

export type Mandamiento = typeof MANDAMIENTOS_DEL_EDEN[number];
