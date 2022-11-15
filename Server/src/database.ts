import { createPool, Pool } from 'mysql2'

export function connect (userName: string, userPassword: string): Pool {
  const connection = createPool({
    host: process.env.DB_HOST ?? '127.0.0.1',
    port: Number(String(process.env.DB_PORT)) ?? 3306,
    user: userName,
    password: userPassword ?? undefined,
    database: process.env.DB_NAME,
    connectionLimit: Number(String(process.env.CONNECTION_LIMIT)) ?? 10
  })

  return connection
}
