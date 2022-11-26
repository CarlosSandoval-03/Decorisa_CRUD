import { createPool, Pool, QueryError, RowDataPacket } from 'mysql2'

export function connect (userName: string, userPassword: string): Pool {
  const connection = createPool({
    host: process.env.DB_HOST ?? '127.0.0.1',
    port: Number(String(process.env.DB_PORT)) ?? 3306,
    user: userName,
    password: userPassword ?? undefined,
    database: process.env.DB_NAME,
    connectionLimit: Number(String(process.env.CONNECTION_LIMIT)) ?? 10,
    ssl: {ca: process.env.DB_SSL}
  })

  return connection
}


export function executeQuery(query: string, callback: (err: QueryError | null, rows: RowDataPacket[]) => RowDataPacket[] | Object, params?: any[]): RowDataPacket[] | void {
  const pool = connect(process.env.DB_TEST_USER ?? '', process.env.DB_TEST_PASSWORD ?? '')
  pool.query(query, params ?? [], callback)
}