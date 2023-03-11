import express from 'express'
import logger from '@example/logger'

import { test, anotherOne } from '@example/utils'
import oneMore from '@example/utils/anotherUtil'

test('server')
anotherOne()
oneMore()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 9999

app.listen(PORT, () => {
  logger.info(`Example app listening on port ${PORT}`)
})
