var canvas = document.getElementById("lienzo");
document.getElementById("menu").style.display = "none";
if (canvas && canvas.getContext) {

	var ctx = canvas.getContext("2d");
	//var img = document.getElementById("foto");
	//ctx.drawImage(img,0, 0,711,571);
	var img = new Image();
	//img.src = "https://verplanos.com/wp-content/uploads/2014/05/plano-casas-planos-gratis-planos-esquemas-de-plantas-autocad-casas-planos.jpg.webp"
	img.src = "http://drive.google.com/uc?export=view&id=1PKhHm-wTmgRYHowpGAoFegEkaT6U_tus"
	

	img.onload = function () {
		ctx.drawImage(img, 0, 0, 611, 371);
	}
	

	if (ctx) {
		traerDatos();
		var output = document.getElementById("output");

		canvas.addEventListener("mousemove", function (evt) {
			var mousePos = oMousePos(canvas, evt);
			marcarCoords(output, mousePos.x, mousePos.y)
		}, false);

		canvas.addEventListener("mouseout", function (evt) {
			limpiarCoords(output);
		}, false);

	}
}

/*
function draw() {
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("foto");
	ctx.drawImage(img, 0, 0, 711, 571);

	if (ctx) {
		var output = document.getElementById("output");

		canvas.addEventListener("mousemove", function (evt) {
			var mousePos = oMousePos(canvas, evt);
			marcarCoords(output, mousePos.x, mousePos.y)
		}, false);

		canvas.addEventListener("mouseout", function (evt) {
			limpiarCoords(output);
		}, false);
	}
}
*/

function marcarCoords(output, x, y) {
	output.innerHTML = ("x: " + x + ", y: " + y);
	output.style.top = (y + 10) + "px";
	output.style.left = (x + 10) + "px";
	output.style.backgroundColor = "#FFF";
	output.style.border = "1px solid #d9d9d9"
	canvas.style.cursor = "pointer";

	if ( 432 < x && y > 41) {
		output.innerHTML = ("Dormitorio");
		ctx.beginPath();
		ctx.lineWidth = "10";
		ctx.strokeStyle = "blue";
		ctx.rect(432, 41, 130, 120);
		ctx.stroke();
		document.getElementById("menu").style.display = "block";

	}
	else {
		ctx.drawImage(img, 0, 0, 611, 371);
		document.getElementById("menu").style.display = "none";
	}
	
}

function limpiarCoords(output) {
	output.innerHTML = "";
	output.style.top = 0 + "px";
	output.style.left = 0 + "px";
	output.style.backgroundColor = "transparent"
	output.style.border = "none";
	canvas.style.cursor = "default";
}

function oMousePos(canvas, evt) {
	var ClientRect = canvas.getBoundingClientRect();
	return { //objeto
		x: Math.round(evt.clientX - ClientRect.left),
		y: Math.round(evt.clientY - ClientRect.top)
	}
}

function traerDatos() {
	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', '', true);

	xhttp.send();

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}

	}
}
