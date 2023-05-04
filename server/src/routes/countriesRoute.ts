const { Router } = require('express')
const Country = require('../models/Country')
const router = Router()

router.post('/', (request: any, response: any) => {
	// The mongoose model assumes there is an open connection
	const newCountry = new Country(request.body)
	newCountry.save((error: any, record: any) => {
		if (error) return response.status(500).json(error)
		return response.json(record)
	})
})
router.get('/', (request: any, response: any) => {
	Country.find({}, (error: any, record: any) => {
		if (error) return response.status(500).json(error)
		return response.json(record)
	})
})

export default router
