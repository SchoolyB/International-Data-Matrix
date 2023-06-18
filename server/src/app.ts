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
const serverInstanceOne = fastify({
  logger: false, // set to true for production
})

const startServerInstanceOne = async () => {
  await mongoose.connect(`${process.env.DATA_BASE}`)

  await serverInstanceOne.register(cors, {
    origin: 'https://international-data-matrix.vercel', //for production
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

// Start server instance two aka comparison data api
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
    origin: 'https://international-data-matrix.vercel', //for production
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

// Start server instance three aka translator
const serverInstanceThree = fastify({
  logger: false, // set to true for production
})

const startServerInstanceThree = async () => {
  await mongoose.connect(`${process.env.DATA_BASE}`)

  serverInstanceThree.register(translateRoute, {
    prefix: '/Translator',
  })

  serverInstanceThree.register(limit, {
    max: 25, //limits each IP to 50 requests per windowMs
    timeWindow: '1 minute',
  })

  serverInstanceThree.register(cors, {
    origin: 'https://international-data-matrix.vercel', //for production
    // origin: 'http://localhost:5173', //for development
  })

  try {
    const address = await serverInstanceThree.listen(
      {
        port: 4044,
        host: '',
      },
      (err, address) => {
        console.log(`Server listening on ${address}`)
      },
    )
  } catch (e) {
    serverInstanceThree.log.error(e)
  }
}
// end of server instance three

// Start all server instances
startServerInstanceOne()
startServerInstanceTwo()
startServerInstanceThree()
