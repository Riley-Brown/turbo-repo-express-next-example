import express from 'express'
import logger from '@example/logger'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 9999

app.listen(PORT, () => {
  logger.info(`Example app listening on port ${PORT}`)
})
