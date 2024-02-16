import 'dotenv/config'
import express from 'express'

const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`\nServer running on http://localhost:${port}\n`)
})
