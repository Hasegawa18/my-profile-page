import { readBody, getMethod, setResponseStatus } from 'h3'
import { getPool, ensureSurveyTable } from '../utils/mysql'

export default defineEventHandler(async (event) => {
  const method = getMethod(event).toUpperCase()
  const pool = await getPool()
  await ensureSurveyTable()

  if (method === 'POST') {
    const body = await readBody(event)
    const survey = typeof body?.survey === 'string' ? body.survey.trim() : ''

    if (!survey) {
      setResponseStatus(event, 400)
      return { error: 'survey is required' }
    }

    const [result] = await pool.execute(
      'INSERT INTO surveys (text) VALUES (?)',
      [survey]
    )

    const insertId = (result as { insertId?: number }).insertId
    const [rows] = await pool.query(
      'SELECT id, text, created_at AS createdAt FROM surveys WHERE id = ?',
      [insertId]
    )

    return Array.isArray(rows) ? rows[0] : rows
  }

  const [rows] = await pool.query(
    'SELECT id, text, created_at AS createdAt FROM surveys ORDER BY created_at DESC'
  )

  return rows
})
