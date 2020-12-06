
const manager = new Manager()
const render = new Renderer()


const loadPage = async () => {
	await manager.getDataFromDB()
	render.renderData(manager)
}
// $(document).ready = loadPage()

const handleSearch = async () => {
	const input = $('#city-input').val()
	
	await manager.getCityData(input)
	let ct = manager.cityData
	console.log(ct);
	// console.log(manager.cityData[]);
	console.log(manager.cityData[0]);
	
	render.renderData(manager)
}

const searchBtn =  () => {
	 handleSearch()
}

Handlebars.registerHelper('clickHelper', function(CityData) {
	return JSON.stringify(CityData);
});

const saveBtn = cityData => {
	manager.saveCity(cityData.CityName)
}

const removeBtn = cityData => {
	manager.removeCity(cityData.CityName)
}

document.addEventListener('readystatechange', () => {    
	console.log('page loaded, delete this log when done');
	loadPage()
});

