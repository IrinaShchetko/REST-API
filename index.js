import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {router} from './routes/route.js'

const app = express()
app.use(express.static('assets'))

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

app.use(cors(corsOptions))
app.use(bodyParser.json())

// app.use(express.json())

app.use('/catalog', router)

const port = 5500
app.listen(port, () => console.log(`Listening on Port: ${port}`))