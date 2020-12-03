const manager = new Manager()
const render = new Renderer()

const loadPage = () => {
	manager.getDataFromDB()
	render.renderData(manager.cityData)
}

const handleSearch = async () => {
	const input = $('#city-input').val()
	
	await manager.getCityData(input)
	render.renderData(manager.cityData)
}

const searchBtn = () => {
	handleSearch()
}
