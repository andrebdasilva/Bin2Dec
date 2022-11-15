const inputBinary = document.getElementById("inputBinary");
const errorOutput = document.getElementById("error");
const output = document.getElementById("output");

const convertToDecimal = (event) => {
	const isValid = !event.target.validity.patternMismatch;
	const validationMessage = event.target.validationMessage = "The format must match the required";	

	if (isValid) {
		errorOutput.innerHTML = "";
		errorOutput.style.display = "none";
		output.textContent = event.target.value ? parseInt(event.target.value, 2) : "";
		output.style.display = "block";
		output.style.fontSize = "2rem";
	} else {
		errorOutput.textContent = validationMessage;
		errorOutput.style.display = "block"
		output.innerHTML = "";
		output.style.display = "none";		
	};
};

inputBinary.addEventListener("input", convertToDecimal);