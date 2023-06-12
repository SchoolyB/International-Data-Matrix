import fastify from 'fastify'
import cors from '@fastify/cors'
import limit from '@fastify/rate-limit'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { countriesRoute } from './routes/countriesRoute'
import { translateRoute } from './routes/translateRoute'
import { comparisonRoute } from './routes/comparisonRoute'

dotenv.config()

// Start server instance one
const serverInstanceOne = fastify({
  logger: false, // set to true for production
})

const startServerInstanceOne = async () => {
  await mongoose.connect(`${process.env.DATA_BASE}`)

  await serverInstanceOne.register(cors, {
    origin: 'https://international-data-matrix.vercel.serverInstanceOne', //for production
    // origin: 'http://localhost:5173', //for development
  })
  // Rate limiter
  await serverInstanceOne.register(limit, {
    max: 50, //limits each IP to 50 requests per windowMs
    timeWindow: '1 minute',
  })

  await serverInstanceOne.register(countriesRoute, {
    prefix: '/Countries',
  })

  await serverInstanceOne.register(translateRoute, {
    prefix: '/Translator',
  })

  try {
    const address = await serverInstanceOne.listen(
      { port: 4042, host: '' },
      (err, address) => {
        console.log(`Server listening on ${address}`)
      },
    )
  } catch (e) {
    serverInstanceOne.log.error(e)
  }
}
// end of server instance one

// Start server instance two
const serverInstanceTwo = fastify({
  logger: false, // set to true for production
})

const startServerInstanceTwo = async () => {
  await mongoose.connect(`${process.env.DATA_BASE}`)

  serverInstanceTwo.register(comparisonRoute, {
    prefix: '/Comparison',
  })

  serverInstanceTwo.register(limit, {
    max: 50, //limits each IP to 50 requests per windowMs
    timeWindow: '1 minute',
  })

  serverInstanceTwo.register(cors, {
    // origin: 'https://international-data-matrix.vercel.serverInstanceTwo', //for production
    // origin: 'http://localhost:5173', //for development
  })

  try {
    const address = await serverInstanceTwo.listen(
      {
        port: 4043,
        host: '',
      },
      (err, address) => {
        console.log(`Server listening on ${address}`)
      },
    )
  } catch (e) {
    serverInstanceTwo.log.error(e)
  }
}
// end of server instance two

// Start both server instances
startServerInstanceOne()
startServerInstanceTwo()
