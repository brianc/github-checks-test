import express from 'express'

const app = express()

app.use((req, res, next) => {
  console.log('req', req.method, req.url)
  next()
})

app.get('/', (req, res) => {
  res.send('hello world')
})

const port = parseInt(process.env.PORT, 10) || 3000

app.listen(port, () => {
  console.log('listening on', port)
})
