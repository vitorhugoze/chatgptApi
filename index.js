const express = require('express')
const app = express()
const routes = require('./routes')
require('dotenv').config()

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log('Listening on 8000')
})