import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {router} from './routes/routes.js'

const app = express()
app.use(express.static('assets'))

app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

const port = process.env.port || 5500
app.listen(port, () => console.log(`Listening on Port: ${port}`))