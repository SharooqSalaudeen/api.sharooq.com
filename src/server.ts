import dotenv from 'dotenv'
const result = dotenv.config()
if (result.error) {
    dotenv.config({ path: '.env' })
}

import express, { Request, Response } from 'express'
// const cors = require('cors');
import { logger } from './utils/logger'
import MongoConnection from './utils/mongo-connection'
import { config } from './config/config'

const mongoConnection = new MongoConnection(config.mongodb_uri ?? '')
const port = config.port
const app = express()

//  Middleware
app.use(express.json())
app.use(express.urlencoded())

// Connect to MongoDB
if (config.mongodb_uri == null) {
    logger.log({
        level: 'error',
        message: 'MONGO_URL not specified in environment',
    })
    process.exit(1)
} else {
    mongoConnection.connect(() => {
        //Start the server
        app.listen(port, (): void => {
            console.log(
                '\x1b[36m%s\x1b[0m', // eslint-disable-line
                `🌏 Express server started on port ${port}`
            )
        })
    })
}

// Create a simple route
app.get('/', (req: Request, res: Response) =>
    res.send('Hello World with TypeScript!')
)

// Close the Mongoose connection, when receiving SIGINT
process.on('SIGINT', () => {
    logger.info('Gracefully shutting down')
    mongoConnection.close()
})
