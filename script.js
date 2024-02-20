var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}
function randomColor(){
     // Generate random values for RGB channels
     var r1 = Math.floor(Math.random() * 256);
     var g1 = Math.floor(Math.random() * 256);
     var b1 = Math.floor(Math.random() * 256);
    
     var r2 = Math.floor(Math.random() * 256);
     var g2 = Math.floor(Math.random() * 256);
     var b2 = Math.floor(Math.random() * 256);
 
     // Construct the hexadecimal color code
     var randomColor1 = "#" + componentToHex(r1) + componentToHex(g1) + componentToHex(b1);
     var randomColor2 = "#" + componentToHex(r2) + componentToHex(g2) + componentToHex(b2);

     // Set the random color as the value of the input
     color1.value = randomColor1;
     color2.value = randomColor2;
     setGradient()
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

window.onload = function(){
    setGradient()
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);