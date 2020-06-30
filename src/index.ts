import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

const port = parseInt(process.env.PORT, 10) || 3000

app.listen(port, () => {
  console.log('listening on', port)
})
