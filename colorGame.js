var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor= pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");


//init();

//function init(){
	// mode button listener
	//setUpModeButton();
	//setUpSquare();
for(var i=0; i< modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy" ? numSqaures=3: numSqaures=6;
		reset();
	});
}
	//for(var i =0; i< squares.length; i++){
	//add initial colors to squares
	//squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	//squares[i].addEventListener("click", function(){
	//		var clickedColor=(this.style.backgroundColor);
	//		//console.log(clickedColor, pickedColor);
	//		if (clickedColor === pickedColor) {
	//		messageDisplay.textContent = "Correct!";
	//		resetButton.textContent= "Play Again?";
	//		changeColors(clickedColor);
	//		h1.style.backgroundColor= clickedColor;
	//		} else{
	//			this.style.backgroundColor = "#232323";
	//			messageDisplay.textContent = "Try Again!";
	//		}
	//	});
	//}
	//reset();

//}

//function setUpModeButton(){
//	for(var i=0; i< modeButtons.length; i++){
//		modeButtons[i].addEventListener("click", function(){
//			modeButtons[0].classList.remove("selected");
//			modeButtons[1].classList.remove("selected");
//			this.classList.add("selected");
//			this.textContent==="Easy" ? numSqaures=3: numSqaures=6;
//
//			reset();
//		});
//	}
//}

//function setUpSquare(){
//	for(var i =0; i< squares.length; i++){
//		squares[i].addEventListener("click", function(){
//			var clickedColor=this.style.backgroundColor;
//			//console.log(clickedColor, pickedColor);
//			if (clickedColor === pickedColor) {
//				messageDisplay.textContent = "Correct!";
//				resetButton.textContent= "Play Again?";
//				changeColors(clickedColor);
//				h1.style.backgroundColor= clickedColor;
//			} else{
//				this.style.backgroundColor = "#232323";
//				messageDisplay.textContent = "Try Again!";
//			}
//		});
//	}

//}
//for(var i=0; i< modeButtons.length; i++){
//	modeButtons[i].addEventListener("click", function(){
//		modeButtons[0].classList.remove("selected");
//		modeButtons[1].classList.remove("selected");
//		this.classList.add("selected");
//		this.textContent==="Easy" ? numSqaures=3: numSqaures=6;
//		//if(this.textContent === "Easy"){
//		//	numSqaures=3;
//		//} else{
		//	numSqaures=6;
		//}

//		reset();
		// figure out how many squares to show
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes

//	});
//}

function reset(){
	//generate all new colors
	colors =generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent= "New Colors";
	//change colors of squares
	messageDisplay.textContent= "";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display= "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor= "steelblue";
}
//easyBtn.addEventListener("click", function(){
//	hardBtn.classList.remove("selected");
//	easyBtn.classList.add("selected");
//	numSqaures=3;
//	colors =generateRandomColors(numSqaures);
//	pickedColor = pickColor();
//	colorDisplay.textContent=pickedColor;
//	for(var i=0 ; i<squares.length; i++){
//		if (colors[i]) {
//			squares[i].style.backgroundColor = colors[i];
//		} else{
//			squares[i].style.display = "none";
//		}
//
//	}
//});

//hardBtn.addEventListener("click", function(){
//	hardBtn.classList.add("selected");
//	easyBtn.classList.remove("selected");
//	numSqaures=6;
//	colors =generateRandomColors(numSqaures);
//	pickedColor = pickColor();
//	colorDisplay.textContent=pickedColor;
//	for(var i=0 ; i<squares.length; i++){
//		squares[i].style.backgroundColor = colors[i];
//		squares[i].style.display = "block";
//
//	}
//});

resetButton.addEventListener("click", function(){
	
	reset();
	//generate all new colors
	//colors =generateRandomColors(numSqaures);
	//pick a new random color from array
	//pickedColor = pickColor();
	//change colorDisplay to match picked color
	//colorDisplay.textContent = pickedColor;
	//this.textContent= "New Colors";
	//change colors of squares
	//messageDisplay.textContent= "";
	//for(var i=0; i<squares.length; i++){
	//	squares[i].style.backgroundColor=colors[i];
	//}
	//h1.style.backgroundColor= "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i =0; i< squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		//console.log(clickedColor, pickedColor);
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent= "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor= clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	//loop thorugh all squares
	for(var i=0 ; i< squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr= []; //make an array
	for(var i=0; i<num; i++){
		arr.push(randomColor());
		//get random color and push into arr
	}
	return arr;
	//return that array
}

function randomColor(){
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return"rgb(" + r + ", " + g + ", " + b + ")";
}