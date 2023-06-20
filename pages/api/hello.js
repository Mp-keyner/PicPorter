// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { poool } from '../../config/db'

export default async function handler(req, res) {

  const [rows] = await poool.query('SELECT NOW()')
  res.status(200).json(rows[0]['NOW()'])
}
