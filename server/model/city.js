const mongoose = require('mongoose')

const Schema = mongoose.Schema

const weatherSchema = new Schema({
	CityName: String,
	Temperature: Number,
	Conditions: String, 
	ConditionIcon: String
})


const Weather = mongoose.model("Weather", weatherSchema)
module.exports = Weather