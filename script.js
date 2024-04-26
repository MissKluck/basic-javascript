const statement = "lars" === "Lars"

if (statement) {
    // console.log("It's true")
} else {
    //console.log("It's false")
}

const age = 28

if (age < 18) {
    //console.log("You're too young to enter")
} else if (age < 30){
    //console.log("Welcome")
} else {
    //console.log("You're too old")
}

switch (1) {
    case 1:
        //console.log("Doing task #1")
        break;

    case 2:
        //console.log("Doing task #2")
        break;

    case 3:
        //console.log("Doing task #3")
        break;

    default:
        //console.log("Default task")
        break;
}

//console.log("Finished")