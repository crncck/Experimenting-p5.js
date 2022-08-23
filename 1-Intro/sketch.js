

// preload() function inserts the instructions for loading data
function preload() {
	//img = loadImage("data/pic.jpg");
}


// setup() function holds the instructions that should be executed just once

function setup() {
	createCanvas(1080, 1080);
}


// draw() function is called in every drawing step and each command line is executed each time

function draw() {
	fill(128);
	strokeWeight(1);

	translate(40, 20);
	rotate(0.5); // radian
	scale(1.5);

	ellipse(50, 50, 80, 80);

	point(60, 50);


	// ------------------------------------------------------
	// 							Variables and Data Types

	var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

	console.log(planets[0]);

	var planetDiameter = [];
	planetDiameter[0] = 4879;
	planetDiameter[1] = 12104;
	planetDiameter[2] = 12756;
	planetDiameter[3] = 6794;

	planets.push("Pluto");

	console.log(planets);



	var planet = {name: "Saturn", mass: 5.685e26, temperature: 134};

	planet.diameter = 120536;

	console.log("mass in kg: " + planet.mass);


		// ------------------------------------------------------
		// 											switch

	var aNumber = 5

	switch (aNumber) {
		case 1:
			rect(20, 20, 80, 80);
			break;
		case 2:
			ellipse(50, 50, 80, 80);
			break;
		default:
			line(20, 20, 80, 80);
	}



	// ------------------------------------------------------
	// 							Mouse and Keyboard


	console.log("mouseposition:" + mouseX + "," + mouseY);
	console.log("mousekey pressed?:" + mouseIsPressed);
	console.log("key pressed?:" + keyIsPressed);
	console.log("last pressed key:" + key);
}


// mouse released event handler, it's called when the left mouse button is released

function mouseReleased() {
	console.log("The mouse key was released");
}

// other handlers are: mousePressed(), mouseMoved(), keyPressed(), and keyReleased()
