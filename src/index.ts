import express from 'express'
import { json } from 'body-parser'

const app = express()
app.use(json())

app.use((req, res, next) => {
  console.log('req', req.method, req.url)
  console.log('body', req.body)
  next()
})

app.get('/', (req, res) => {
  res.send('hello world')
})

const port = parseInt(process.env.PORT, 10) || 3000

app.listen(port, () => {
  console.log('listening on', port)
})
