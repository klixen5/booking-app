import { type Express } from 'express'
import { usersRouter } from './users.js'


export function mountRoutes(app: Express): void {
  app.use(usersRouter)
}