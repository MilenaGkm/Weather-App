
class Manager {
	constructor() {
		this.cityData = []
	}

	getDataFromDB() {
		$.get("/cities", (cities) => {
			this.cityData = cities
			console.log('dud');
		})
	}

	
	async getCityData() {
		console.log('a');
		try {
		await $.get("/city/:cityName", (city) => {
			console.log('b');
			this.cityData = {
				CityName: city.name,
				Temperature: city.main.temp,
				Conditions: city.weather.description, 
				ConditionIcon: city.weather.icon
			}
			console.log('c');
		})
		console.log('d');
		} catch (error) {
			// console.error(error);
			console.log('gg');
		}
		console.log('e');
	}


	saveCity(cityName) {
		console.log('a2');
		$.post('/city', () => {

		})
	}


	removeCity() {
		
	}

}



