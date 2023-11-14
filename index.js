import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// import {router} from './routes/routes.js'
import { MongoClient } from 'mongodb'

const url = "mongodb://127.0.0.1:27017/zebra/"
const mongoClient = new MongoClient(url)

async function run() {
    try {
        const db = mongoClient.db("zebra")
        const collection = db.collection("catalog")
        const results = await collection.find().toArray()
        return results
    } catch (err) {
        console.log(err)
        throw err
    }
}

const app = express()
app.use(express.static('assets'))
app.use(cors())
app.use(bodyParser.json())

const connectToDatabase = () => new Promise((resolve, reject) => {
    mongoClient.connect()
        .then(() => {
            console.log("Connected to the database")
            resolve()
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err)
            reject(err)
        })
})

connectToDatabase()
    .then(() => {
        app.get('/catalog', async (req, res) => {
            try {
                const data = await run()
                res.json(data)
            } catch (err) {
                console.error(err)
                res.status(500).send('Internal Server Error')
            }
        })
        const port = process.env.PORT || 5500

        app.listen(port, () => {
            console.log(`Listening on Port: ${port}`)
        })
    })
    .catch((err) => {
        console.error("Error starting the server:", err)
    })
