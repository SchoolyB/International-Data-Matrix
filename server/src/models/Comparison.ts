import mongoose from 'mongoose'

let comparisonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/,
  },
  population: {
    type: Number,
    required: true,
  },
  number_of_timezones: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/,
  },
  flag: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/,
  },
  flagAlt: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/,
  },
  year_founded: {
    type: Number,
    required: false,
  },
  year_of_independence: {
    type: Number,
    required: false,
  },
  government_type: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/,
  },
  link: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/,
  },
  timezones: {
    type: [String],
    required: true,
    validate: /^[A-Za-z ]*$/,
  },
  // To achieve MVP, for now this schema will be limited to the above fields.
  // In the future, will add more fields
})

const Comparison = mongoose.model('Comparison', comparisonSchema)
export default Comparison
