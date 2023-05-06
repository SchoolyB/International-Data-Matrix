import Router from 'express'
import Country from '../models/Country'
const router = Router()
router.get('/', (request: any, response: any) => {
	Country.find({}, (error: any, record: any) => {
		if (error) return response.status(500).json(error)
		return response.json(record)
	})
})

export default router
