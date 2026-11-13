import { Pool } from 'pg'


const pool = new Pool()

export function query(text: string, params: Array<unknown> = []) {
  return pool.query(text, params)
}