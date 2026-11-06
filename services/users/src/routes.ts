import express from 'express'

const router = express.Router()

router.post('/debug/json', (req, res) => {
  res.json({ received: req.body })
})

export { router }