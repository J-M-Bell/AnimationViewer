/**
 * A JavaScript file that controls the 
 * functionality of the 'controls' fieldsets
 * to display animations to the user depending 
 * on which animation is selected.
 * 
 * @author JM Bell
 * @version 1/28/25
 */


var counter = 0;
var timer;

/**
 * A function that sets the timer 
 * interval for the animation 
 */
function startButtonClicked() {
    //implement timer
    if (document.getElementById("turbo").checked == false) {
        timer = setInterval(runAnimation, 250);
    }
    else {
        timer = setInterval(runAnimation, 50);
    }

}


/**
 * A function that begins the animation,
 * enables the stop button, and disables
 * the animation select drop down list
 * when the start button is clicked.
 */
function runAnimation() {   
    //display animation one frame at a time
    var animationSelected = document.getElementById("animationSelect").value;
    var animation = ANIMATIONS[animationSelected];
    var frames = animation.split("=====\n");
    if (counter >= frames.length) {
        resetCounter();
    }
    document.getElementById("textarea").value = frames[counter];
    counter += 1;


    //Control enabling or disabling
    document.getElementById("stopButton").disabled = false;
    document.getElementById("animationSelect").disabled = true;
    document.getElementById("startButton").disabled = true;
}

/**
 * A function that halts any animation
 * that is currently in progress and returns
 * the text box to its original state before
 * the animation began.
 */
function stopButtonClicked() {
    clearInterval(timer);
    timer = null;
    resetCounter();
    displayFullText();
    

    //Control enabling or disabling
    document.getElementById("startButton").disabled = false;
    document.getElementById("animationSelect").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

/**
 * A function that displays all text 
 * of an animation depending on the 
 * animation that was chosen in the 
 * drop down list. 
 */
function animationSelectChanged() {
    //display animation text
    displayFullText();
}

/**
 * A function that sets the font size
 * of the animation depending on the 
 * font size that was chosen in the 
 * drop down list.
 */
function fontSizeSelectChanged() {
    var font = document.getElementById("fontSizeSelect").value;
    document.getElementById("textarea").style.fontSize = font;
}

/**
 * A function that changes the delay
 * time of the animation to 50ms when 
 * the checkbox is checked and 250ms
 * otherwise.
 */
function speedCheckboxClicked() {
    if (timer != null) {
        if (document.getElementById("turbo").checked) {
            clearInterval(timer);
            timer = setInterval(runAnimation, 50);
        }
        else {
            clearInterval(timer);
            timer = setInterval(runAnimation, 250);
        }
    }
}

/**
 * A function that resets the global
 * counter variable to 0
 */
function resetCounter() {
    counter = 0;
}

/**
 * A function to display the animation.
 */
function displayFullText() {
    var animation = document.getElementById("animationSelect").value;
    document.getElementById("textarea").value = ANIMATIONS[animation];
}

