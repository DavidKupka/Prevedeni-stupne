function convertTemp() {
	let celsius = document.getElementById('celsius').value;
	
	let fahrenheit = convertToFahrenheit(celsius);
	
	let resultDiv = document.getElementById('result');
	resultDiv.innerHTML = '<p>' + celsius + ' °C je ' + fahrenheit.toFixed(2) + ' °F</p>';
}

function convertToFahrenheit(celsius) {
	return (celsius * 9/5) + 32;
}
