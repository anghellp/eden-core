// /api/server.ts
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const evaRouter = (await import(path.join(__dirname, './eva/index.ts'))).default

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/eva', evaRouter)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`🚀 Eva Skema backend corriendo en http://localhost:${PORT}`)
});
