# 🌿 Edén / EdenCore

## 📖 Resumen
Edén es una plataforma integral para la gestión de proyectos, operación y documentación de redes/WiFi en entornos hoteleros y corporativos. Incluye **Eva Skema**, un asistente IA integrado que guía, valida y acelera el trabajo.

**Principios:**
- **Mandamientos**: reglas operativas.
- **Génesis**: creación y orden inicial.
- **Gran Purificador**: limpieza previa antes de liberar.
- **Trazabilidad**, **velocidad** y **evidencia** como pilares.

---

## 🧭 Objetivos
1. **Velocidad**: UI fluida y consultas rápidas.
2. **Evidencia**: fotos GPS, speedtests, BoM, firmas.
3. **Trazabilidad**: logs, historiales, versiones.
4. **IA útil**: sugerir, validar y resumir.
5. **Seguridad/Permisos**: por rol y módulo.
6. **Responsive real**: iPhone/iPad/desktop, notch-safe.

---

## 👥 Roles
- Super Admin
- Account Manager / Project Manager
- IT / Ingeniería / NOC / Campo
- Cliente
- Compras, Legal, Finanzas, Marketing, etc.

---

## 🛠 Stack
**Frontend**
- React + TypeScript
- Vite
- Tailwind CSS
- react-router-dom
- i18next
- lucide-react

**Backend/Auth**
- Supabase Auth (email/password + Google)
- Supabase REST/Realtime

**Base de datos**
- PostgreSQL (Supabase)
- Esquema `eden_skema_genesis_v8.sql` con +30 tablas

**IA**
- Eva Skema: núcleo IA (chatgpt-4o → local_llm)
- Registro de interacciones y aprendizaje

---

## 🔥 Motores del Edén
1. Motor UI/UX (responsive, notch-safe, dark/light, i18n)
2. Motor de Autenticación y Seguridad (Supabase Auth, permisos, logs)
3. Motor de Datos (PostgreSQL)
4. Motor de IA (Eva Skema)
5. Motor de Evidencias (fotos GPS, speedtests)
6. Motor de BoM y Costos
7. Motor de Documentos y Firmas
8. Motor de Operación (proyectos, tickets, notificaciones)

---

## 📜 Mandamientos
1. Registrar % real + comentario/plan en avances.
2. SLA/ETA en todas las tareas.
3. Evidencia obligatoria para cerrar.
4. No fusionar conceptos en catálogos.
5. Consejo IA registrado con contexto/confianza.
6. Multilenguaje y tema globales.
7. Responsive real en todos los dispositivos.
8. Permisos por rol y módulo.
9. Trazabilidad en cambios críticos.
10. Flujo mínimo de levantamiento.
11. Consultas optimizadas.
12. No posponer bloqueantes.
13. Dashboard por rol.
14. Exportables PDF/CSV.
15. Consistencia de datos validada por IA.
16. Notificaciones internas.
17. Integraciones planificadas.

---

## ✝️ Génesis y Gran Purificador
**Génesis**: Creación inicial del orden del sistema.  
**Gran Purificador**: Limpieza de datos, código y UI antes de liberar:
- Deduplicar datos
- Limpiar imports y nombres
- QA responsive y traducciones
- Flujos completos testeados

---

## 🗄 Modelo de datos
*(Simplificado)*
- Usuarios, Roles, Departamentos, Organigrama, Directorio
- Proyectos, Asignaciones, Levantamientos
- Equipos, BoM, Cotizaciones
- Tickets, Notificaciones
- Evidencias: Fotos con GPS, Speedtests
- Documentos, Versiones, Firmas
- Seguridad: Accesos, Historial
- IA: Núcleo, Módulos, Aprendizaje, Base de Conocimiento, Sesiones, Interacciones
- Reglas Normativas

---

## 🔄 Flujos principales
1. **Login** → sincronización con `public.usuarios` + `logs_acceso`.
2. **Proyecto** → Sitio → Levantamiento.
3. Captura de **evidencias** (fotos + speedtests).
4. Armado de **BoM** + cotización.
5. Versionado y **firmas digitales**.
6. Cierre de levantamiento.

---

## 🧾 Estándares de desarrollo
- TS estricto, camelCase en front, snake_case en DB.
- Commits convencionales.
- Versionado semver.
- Evitar `select *`.
- Paginación y cache local.

---

## 📂 Estructura propuesta

/src
/routes
/login
/dashboard
/components
/layout
/common
/layout
/lib
/i18n
/styles
index.html

---

## ⚙️ Variables de entorno (.env.example)

VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<key>
EDEN_DEFAULT_ROLE_ID=1
EDEN_DEFAULT_TZ=America/Cancun

---

## 📅 Roadmap
✅ Responsive global  
✅ Layout centrado notch-safe  
✅ Login funcional  
✅ Esquema SQL Génesis v8  
🔁 Edge function `sync_user_profile`  
🔁 Dashboard por rol  
🧭 Wizard Levantamiento  
🧭 BoM editor + validación IA  
🧭 Documentos y firmas  
🧭 Tickets con SLA y notificaciones  
🧭 Mapas evidencias GPS  
🧭 Exportables PDF/CSV

---

## 📌 Glosario
- Mandamientos: Reglas operativas.
- Motores: Componentes clave.
- Génesis: Creación inicial.
- Gran Purificador: Limpieza previa.
- Levantamiento: Recopilación de evidencias en sitio.
- Célula: Equipo asignado.
- BoM: Bill of Materials.
- SLA/ETA: Tiempo de servicio/entrega.
- Reglas normativas: Políticas ligadas a levantamiento.
- Eva Skema: IA integrada.
