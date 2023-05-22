import fastify from "fastify";
import cors from "@fastify/cors";


const app = fastify({
  logger: false // set to true for production
})
app.register(cors, {
  origin: 'http://localhost:5173' //for development
  // options: 'https://international-data-matrix.vercel.app' //for production
})

const start = () => {
  try {
    app.listen({
      port: 4042, host: ''
    }, (err,address) => {
      console.log(`Server listening on ${address}`)
     })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
