import express from 'express'
import { mountRoutes } from './routes/index.js'

const app = express()

app.use(express.json())
mountRoutes(app)


export { app }

