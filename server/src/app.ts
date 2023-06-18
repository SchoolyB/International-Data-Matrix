import fastify from 'fastify'
import cors from '@fastify/cors'
import limit from '@fastify/rate-limit'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { countriesRoute } from './routes/countriesRoute'
import { translateRoute } from './routes/translateRoute'
import { comparisonRoute } from './routes/comparisonRoute'

dotenv.config()

// Start server instance one aka country data api
const serverInstance = fastify({
  logger: false, // set to true for production
})

const startServerInstance = async () => {
  await mongoose.connect(`${process.env.DATA_BASE}`)

  await serverInstance.register(cors, {
    origin: 'https://international-data-matrix.vercel', //for production
    // origin: 'http://localhost:5173', //for development
  })
  // Rate limiter
  await serverInstance.register(limit, {
    max: 50, //limits each IP to 50 requests per windowMs
    timeWindow: '1 minute',
  })

  await serverInstance.register(countriesRoute, {
    prefix: '/Countries',
  })

  serverInstance.register(comparisonRoute, {
    prefix: '/Comparison',
  })

  serverInstance.register(translateRoute, {
    prefix: '/Translator',
  })

  serverInstance.register(limit, {
    max: 25, //limits each IP to 50 requests per windowMs
    timeWindow: '1 minute',
  })

  try {
    const address = await serverInstance.listen(
      { port: 4042, host: '' },
      (err, address) => {
        console.log(`Server listening on ${address}`)
      },
    )
  } catch (e) {
    serverInstance.log.error(e)
  }
}
// end of servers
startServerInstance()
