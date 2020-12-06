class Renderer {

	renderData(cityData) {
		// clear handlebars
		$('.weather-container').empty();
		const source = $("#weather-template").html();
		const template = Handlebars.compile(source);
		const newHTML = template(cityData);
		$('.weather-container').append(newHTML);
	}
}