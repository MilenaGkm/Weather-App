const express = require("express")
const router = express.Router()
const axios = require("axios")
const Weather = require("../model/city")
const { data } = require("jquery")

const apiKey = '1a3587c525d3e3a01d24079f785870a1'


router.get('/sanity', (req, res) => {
	res.send('All good! but are u sane?')
})

router.get('/city/:cityName', async (req, res) => {
	const { cityName } = req.params
	
	const weatherApi = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
	res.send(weatherApi.data)
})


router.get('/cities', async (req, res) => {
	const cities = await Weather.find({})
	res.send(cities)
})


router.post('/city', async (req, res) => {
	const  city  = req.body
	const cityWeather = new Weather({
		name: city.name,
		temperature: city.main.temp,
		condition: city.weather.description,
		conditionPic: city.weather.icon
	})
	const saveCity = await cityWeather.save()
	res.send(saveCity)
})

router.delete('/city/:cityName', async (req, res) => {
	const { cityName } = req.params

	const city = await Weather.findOneAndDelete(cityName)
	res.send(`Deleted ${cityName}`)
})



  module.exports = router