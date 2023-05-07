import express, { Express } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import countries from './routes/countriesRoute'
import translator from './routes/translateRoute'

dotenv.config() //allows server to read DB key from a .env file

const PORT = process.env.PORT || 4042 // we use || to provide a default value
const app = express()

mongoose.connect(`${process.env.DATA_BASE}`)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error:'))
db.once(
	'open',
	console.log.bind(console, 'Successfully connected to database!'),
)

const logging = (request: any, response: any, next: any) => {
	console.log(`${request.method} ${request.url}`)
	next()
}
// const allowedOrigins = ['https://international-data-matrix.vercel.app']
const allowedOrigins = ['http://localhost:5173']
const options: cors.CorsOptions = {
	origin: allowedOrigins,
}
// CALLING ALL EXPRESS .use methods
app.use(cors(options))
app.use(express.json())
app.use(logging)
app.use('/Countries', countries)
app.use('/translator', translator)
//Listen for what port server is running on and log it.
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
