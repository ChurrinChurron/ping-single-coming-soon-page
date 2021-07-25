let correo = document.querySelector("input");
	form = document.querySelector("form");
	boton = document.querySelector("button");
	mensajeError = document.getElementById("error");
	validacion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

form.addEventListener("submit", (e) => {

	e.preventDefault();
});

correo.addEventListener("keyup", () => {

	if(correo.value.length < 1 || correo.value.trim() == "") {

		mensajeError.innerHTML = "Please provide a valid email address";
		correo.style.border = "1px solid hsl(354, 100%, 66%)";
	}

	else if(!validacion.test(correo.value)) {

		mensajeError.innerHTML = "Please provide a valid email address";
		correo.style.border = "1px solid hsl(354, 100%, 66%)";

	}

	else {

		mensajeError.innerHTML = "";
		correo.style.border = "1px solid hsl(223, 100%, 88%)";
	}

	});

	boton.addEventListener("click", () => {

		if(!validacion.test(correo.value)) {

		mensajeError.innerHTML = "Please provide a valid email address";
		correo.style.border = "1px solid hsl(354, 100%, 66%)";
	}

	else {

		mensajeError.innerHTML = "";
		correo.style.border = "1px solid hsl(223, 100%, 88%)";

		alert("Thanks! <:^) ");
	}

	});