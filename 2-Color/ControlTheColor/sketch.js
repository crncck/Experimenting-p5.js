function setup() {
	createCanvas(720, 720);
	noCursor();

	colorMode(HSB, 360, 100, 100);   // hue between 0 and 360
	rectMode(CENTER);
	noStroke();
}

function draw() {
	background(mouseY / 2, 100, 100);

	fill(360 - mouseY / 2, 100, 100);					// y: hue
	rect(360, 360, mouseX + 1, mouseX + 1);		// x: size of rectangle
}
