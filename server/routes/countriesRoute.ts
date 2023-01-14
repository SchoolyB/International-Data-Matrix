const { Router } = require("express");
const Country = require("../models/Country");
const router = Router();

router.post("/", (request, response) => {
  // The mongoose model assumes there is an open connection
  const newCountry = new Country(request.body);
  newCountry.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.get("/", (request, response) => {
  Country.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
