var currentX, currentY, currentR, currentG, currentB, currentAngle, isDrawing;

function getCanvas() {
	return document.getElementById('workspace');
}

function initialize(x, y) {
	document.body.innerHTML = "";
	
	var canvas = document.createElement("canvas");
	canvas.setAttribute("id", "workspace");
	canvas.setAttribute("width", x);
	canvas.setAttribute("height", y);
	
	document.body.appendChild(canvas);
	
	currentAngle = 0;
	
	currentX = x / 2;
	currentY = y / 2;
	
	currentR = 0;
	currentG = 0;
	currentB = 0;
	
	isDrawing = false;
}

function move(d) {
	var x = currentX + d * Math.cos(currentAngle);
	var y = currentY + d * Math.sin(currentAngle);
	moveTo(x, y);
}

function moveTo(x, y) {
	if (isDrawing) {
		var context = getCanvas().getContext('2d');
		context.beginPath();
		context.moveTo(currentX, currentY);
		context.lineTo(x, y);
		context.strokeStyle = 'rgb(' + currentR + ', ' + currentG + ', ' + currentB + ')';
		context.stroke();
	}
	currentX = x;
	currentY = y;
}

function startDrawing() {
	isDrawing = true;
}

function stopDrawing() {
	isDrawing = false;
}

function rotate(angle) {
	currentAngle -= Math.PI * angle / 180.0;
}

function changeColor(r, g, b) {
	currentR = r;
	currentG = g;
	currentB = b;
}
