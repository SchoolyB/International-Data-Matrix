import Comparison from '../models/Comparison'
import { FastifyInstance } from 'fastify'

export async function comparisonRoute(instance: FastifyInstance) {
  instance.get('/', async (_, reply) => {
    const result = await Comparison.find({})
    return result
  })
}
