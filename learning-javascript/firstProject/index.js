const select = document.getElementById("weather");
const paragragh = document.getElementById("weather-rec");

select.addEventListener("change", setWeather);

function setWeather(){
	const choice = select.value;
	if (choice === "Sunny"){
		paragragh.innerText = "Wear shorts and get some ice cream";
	}
	else if (choice === "Superhot"){
		paragragh.innerText = "Go inside. U will burn.";
	}
	else if (choice === "Rainy"){
		paragragh.innerText = "bring an unbrella. Or don't.";
	}
	else if (choice === "Snowing"){
		paragragh.innerText = "Build a snowman or go sleigding";
	}
	else if (choice === ""){
		paragragh.innerText = " ";
	}
	else {
		paragragh.innerText = "It's kinda boring out. Doesn't really matter if u stay in or not.";
	}
}