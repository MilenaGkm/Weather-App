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

	
}






