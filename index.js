const express = require('express')
const cors = require('cors')
const catalog = require('./routes/catalog')

const app = express()
app.use(express.static('assets'))

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/catalog', catalog)

const port = 5500
app.listen(port, () => console.log(`Listening on Port: ${port}`))