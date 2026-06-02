import mysql from 'mysql2/promise'

let pool: mysql.Pool | null = null

const getPoolConfig = () => {
  return {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    timezone: 'Z',
    charset: 'utf8mb4'
  }
}

export const getPool = async () => {
  if (pool) {
    return pool
  }

  const database = process.env.MYSQL_DATABASE || 'nuxt_app'
  const config = getPoolConfig()
  const adminPool = mysql.createPool(config)

  await adminPool.query(
    `CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci`
  )
  await adminPool.end()

  pool = mysql.createPool({
    ...config,
    database
  })

  return pool
}

export const ensureSurveyTable = async () => {
  const pool = await getPool()
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS surveys (
      id INT AUTO_INCREMENT PRIMARY KEY,
      text TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `)
}
