canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_img_Tag = new Image();
	background_img_Tag.onload = uploadBackground;
	background_img_Tag.src = background_image;

	greencar_img_Tag = new Image();
	greencar_img_Tag.onload = uploadgreencar;
	greencar_img_Tag.src = greencar_image;

	function uploadBackground() {
		ctx.drawImage(background_img_Tag, 0, 0, canvas.width, canvas.height);

	}

	function uploadgreencar() {
		ctx.drawImage(greencar_imgTag, greencar_X, greencar_Y, greencar_width, greencar_height);


	}


	window.addEventListener("keydown", my_keydown);

	function my_keydown(e) {
		keyPressed = e.keyCode;
		console.log(keyPressed);
		if (keyPressed == '38') {
			up();
			console.log("up");
		}

		if (keyPressed == '40') {
			down();
			console.log("down");
		}

		if (keyPressed == '37') {
			left();
			console.log("left");
		}

		if (keyPressed == '39') {
			right();
			console.log("right");
		}


	}

	function up() {
		if (greencar_Y >= 0) {
			greencar_Y = greencar_Y - 10;
			console.log("when up arrow is pressed, x =" + greencar_X + "|y= " + greencar_Y);
			uploadBackground();
			uploadGreencar();

		}
	}
	function down() {
		if (greencar_Y < 500) {
			greencar_Y = greencar_Y + 10;
			console.log("when down arrow is pressed, x =" + greencar_X + "|y= " + greencar_Y);
			uploadBackground();
			uploadGreencar();

		}
	}
	function left() {
		if (greencar_X >= 0) {
			greencar_X = greencar_X - 10;
			console.log("when left arrow is pressed, x =" + greencar_X + "|y= " + greencar_Y);
			uploadBackground();
			uploadGreencar();

		}
	}
	function right() {
		if (rover_X < 700) {
			rover_X = rover_X + 10;
			console.log("when right arrow is pressed, x =" + rover_X + "|y= " + rover_Y);
			uploadBackground();
			uploadrover();

		}
	}
}
