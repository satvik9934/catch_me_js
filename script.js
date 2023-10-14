var box = document.getElementById('box');

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;


box.addEventListener("mouseover", function(event) {
    var boxAttr = box.getBoundingClientRect();
    console.log(boxAttr);
    
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    console.log(pos);
    
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});



function getNewPosition(boxWidth, boxHeight) {
    
    // The boxWidth and boxHeight are subtracted so that they would not move out from the right and bottom direction
    var newX = Math.floor((Math.random() * viewWidth)  - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight)  - boxHeight);
    console.log(newX);
    console.log(newY);

    // These will satisfy that box does not move go out in the top and left direction
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
     console.log(newX);
    console.log(newY);
}
// Move the ball
var ball = document.getElementById("ball");
ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";
var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;
function setValue(value) {
    return value + "px";
}
// When using event.keyCode;
function keyCode(keyPress) {

    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    // W is pressed
    if (keyPress === 119 || keyPress === 87) {
        if (top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }

    // A is pressed
    else if (keyPress === 97 || keyPress === 65) {
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    // S is pressed
    else if (keyPress === 115 || keyPress === 83) {
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    // D is pressed
    else if (keyPress === 100 || keyPress === 68) {
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }

};

window.addEventListener("keypress", function (event) {
    keyCode(event.keyCode);
});





