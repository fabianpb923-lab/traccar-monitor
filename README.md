# Traccar Monitor

Guía rápida para levantar el proyecto (frontend + backend) en desarrollo.

## Requisitos
- Node.js >= 18 y npm (o pnpm/yarn)
- Git
- Acceso a una instancia de Traccar (opcional). Si no hay dispositivos, la app usará datos simulados.

## Estructura relevante
- Backend: [backend/](backend/)
  - Rutas: [backend/src/routes](backend/src/routes)
  - Servicio Traccar: [backend/src/services/traccar.service.js](backend/src/services/traccar.service.js)
  - Archivo de configuración: `backend/.env`
- Frontend: [src/](src/)
  - Páginas: [src/pages/Dashboard.tsx](src/pages/Dashboard.tsx)
  - Hooks: [src/hooks/useDevices.ts](src/hooks/useDevices.ts), [src/hooks/usePositions.ts](src/hooks/usePositions.ts)
  - Stores: [src/store/appStore.ts](src/store/appStore.ts), [src/store/vehicleStore.ts](src/store/vehicleStore.ts)

## Configurar variables de entorno (backend)
Crea `backend/.env` con las siguientes variables (ejemplo):

```
PORT=3001
TRACCAR_URL=https://demo4.traccar.org
TRACCAR_USER=tu_email@example.com
TRACCAR_PASSWORD=tu_password
```

- `TRACCAR_USER`/`TRACCAR_PASSWORD` se usan para iniciar sesión en la API de Traccar.
- Si la cuenta no tiene dispositivos, el backend devolverá un arreglo vacío y el frontend usará datos simulados.

## Instalación
Desde la raíz del repo:

```bash
# instalar dependencias del frontend
npm install

# instalar dependencias del backend
cd backend && npm install
cd -
```

## Desarrollo (arrancar servidores)
En terminales separados:

```bash
# Backend (nodemon)
cd backend
npm run dev

# Frontend (Vite)
# desde la raíz del repo
npm run dev
```

- Frontend por defecto corre en `http://localhost:5175/` (si 5173/5174 están ocupados).
- Backend corre en `http://localhost:3001/`.

## Comandos útiles
- Build frontend + comprobación TypeScript: `npm run build`
- Lint: `npm run lint`
- Backend dev: `cd backend && npm run dev`

## Probar integración con Traccar
- Inicia backend con `backend/.env` configurado.
- Ejemplo de login manual (curl):

```bash
curl -i -X POST "${TRACCAR_URL}/api/session" \
  -d "email=${TRACCAR_USER}&password=${TRACCAR_PASSWORD}" \
  -H 'Content-Type: application/x-www-form-urlencoded' -c cookies.txt
```

- Endpoints del backend:
  - `GET /devices` -> devuelve dispositivos desde Traccar o `[]` si no hay.
  - `GET /positions?deviceId=<id>` -> devuelve la última posición para `deviceId` o datos simulados.

## Modo Simulado / Live
- En el frontend hay un toggle "Simulado / Live". En `Simulado` los hooks devuelven mocks y se evita el polling a Traccar.
- En `Live` el frontend consulta al backend que usa la cookie de sesión para consultar Traccar.

## Troubleshooting
- `devices` viene vacío: verifica que la cuenta Traccar tenga dispositivos; revisa logs del backend.
- Errores 400/401 de Traccar: confirma `TRACCAR_URL` y credenciales; el servicio guarda la cookie `JSESSIONID`.
- Ver logs en nodemon: en el terminal donde corre `cd backend && npm run dev`.

## Archivos clave
- [backend/src/services/traccar.service.js](backend/src/services/traccar.service.js)
- [backend/src/routes/devices.routes.js](backend/src/routes/devices.routes.js)
- [backend/src/routes/positions.routes.js](backend/src/routes/positions.routes.js)
- [src/hooks/useDevices.ts](src/hooks/useDevices.ts)
- [src/hooks/usePositions.ts](src/hooks/usePositions.ts)
- [src/pages/Dashboard.tsx](src/pages/Dashboard.tsx)

## Siguientes pasos
- Puedo revisar logs del backend si pegas la salida con errores.
- Puedo añadir un script para generar un `.env.example` o un contenedor Docker.

---
README actualizado por el asistente con instrucciones para levantar el proyecto.
