class Renderer {

	renderData(cityData) {
		console.log('renderer1');
		console.log(cityData);
		const source = $("#weather-template").html();
		const template = Handlebars.compile(source);
		const newHTML = template({cityData});
		$('.weather-container').append(newHTML);
		console.log(cityData.CityName);
		console.log('it rendered?');
		console.log(newHTML);
	}
}