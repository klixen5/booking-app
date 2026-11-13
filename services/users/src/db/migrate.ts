import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Pool } from 'pg'


const pool = new Pool()

try {
  const sql = await readFile(join(import.meta.dirname, '../..', 'migrations', '001_create_users.sql'), 'utf-8')

  await pool.query(sql)
  console.log('Миграция выполнена')
} finally {
  await pool.end()
}