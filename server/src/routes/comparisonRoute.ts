import Comparison from '../models/Comparison'
import { FastifyInstance } from 'fastify'
import limit from '@fastify/rate-limit'

export async function comparisonRoute(instance: FastifyInstance) {
  instance.get('/', async (_, reply) => {
    const result = await Comparison.find({})
    return result
  })
  await instance.register(limit, {
    max: 50, //limits each IP to 50 requests per windowMs
    timeWindow: '1 minute',
  })
}
