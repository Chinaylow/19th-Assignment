var msg = document.getElementById("msg")
function lifeInWeeks(age) {
    var age = parseInt(prompt('Enter your age'));
    var years = 90 - age;
    var months = years * 12;
    var weeks = years * 52;
    var days = years * 365;
    var output = "You have " + days + " days, " + weeks + " weeks " + " and " + months + " months left.";
    // console.log(output);
    return output;
    }
    var yourAge = lifeInWeeks();
    msg.innerHTML = yourAge;


    //I tried to put a number in the argument above but the output is whatever i put in the prompt
    //so i have to uncomment my first line of code then put an argument (age) then it works
    //i just wanted to practice the return
    