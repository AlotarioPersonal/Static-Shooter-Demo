//gamelogic.js
//file for handling game logic.

//the player's score
var points = 0

//calculates the position of the crosshair
function calcPosGun() {

    //grab crosshair
    var cursor = document.getElementById('cursor')

    //on mouse update, grab mouse's position and center the crosshair on it
    const onMouseMove = (e) =>{
        cursor.style.left = e.pageX - 14;
        cursor.style.top = e.pageY - 14;
    }

document.addEventListener('mousemove', onMouseMove);

//note: because the cursor would normally be rendered on top of the image, you'd click on the image and not be able to use the gun
//i fixed this by using the actual built-in CSS crosshair cursor, the red one is purely for visual clarity

}

//this just goes on the target, see below
function hitManager() {

    randomTarget()
    gunAnimationHandler()

}


//generates random X and Y coordinates for the target
function randomTarget() {

    //grab target
    var target = document.getElementById('target')

    //generate coordinates with Math.random
    target.style.top = Math.floor(Math.random() * 285)
    target.style.left = Math.floor(Math.random() * 1225)

}

//handles point counting and gun "animations"
function gunAnimationHandler() {

    //grab gun, sounds, and point display
    var gun = document.getElementById("yagun")
    var hit = document.getElementById('hit')
    var tenpoints = document.getElementById('tenpoints')
    var pointsthing = document.getElementById('points')

    //switch gun image source, play audio, score points, check for flash effects, then change source of gun and color of display back to normal
    gun.src = URL = "media/doomgun2.png";
    hit.play()
    points += 1
    if (points % 10 == 0) {

        tenpoints.play()
        pointsthing.style.color = "red"

    }
    pointsthing.innerHTML = "Points: " + points
    setTimeout(function() {

        gun.src = URL = "media/doomgun1.png";
        pointsthing.style.color = "lime"

    }, 100)

}


calcPosGun()