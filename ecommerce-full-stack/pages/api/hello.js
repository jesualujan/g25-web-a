import db from '../../utils/db'

export default async function handler(req, res) {
  await db.connect()
  await db.disconnect()
  res.status(200).json({ name: 'Jesua Luján 😃', description: 'learning nextJS' })
}
