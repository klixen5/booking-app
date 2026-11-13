import express from 'express'
import { query } from '../db/index.js'


export const usersRouter = express.Router()

usersRouter.post('/debug/json', (req, res) => {
  res.json({ received: req.body })
})

usersRouter.get('/now', async (req, res) => {
  const now = await query('SELECT NOW()')
  res.json({ now: now.rows[0].now })
})