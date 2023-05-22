import Country from '../models/Country'
import { FastifyInstance } from 'fastify'

export async function countriesRoute(instance: FastifyInstance) {
  instance.get('/', async (_, reply) => {
    const result = await Country.find({})
    return result
  })
}
