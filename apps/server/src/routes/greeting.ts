import { Router } from 'express'
import { db } from '../lib/db.js'

const router = Router()

// GET /api/greeting — get the current greeting message
router.get('/', async (req, res) => {
  const docs = await db.collection('greeting').find()
  if (docs.length === 0) {
    const id = await db.collection('greeting').insertOne({ message: 'Hello, World!' })
    const item = await db.collection('greeting').findById(id)
    return res.json(item)
  }
  res.json(docs[0])
})

// PUT /api/greeting — update the greeting message
router.put('/', async (req, res) => {
  const docs = await db.collection('greeting').find()
  let item
  if (docs.length === 0) {
    const id = await db.collection('greeting').insertOne({ message: req.body.message || 'Hello, World!' })
    item = await db.collection('greeting').findById(id)
  } else {
    await db.collection('greeting').updateOne(docs[0]._id, { message: req.body.message })
    item = await db.collection('greeting').findById(docs[0]._id)
  }
  res.json(item)
})

export default router