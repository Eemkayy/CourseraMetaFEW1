var age = 10;

if (age>=65){
    console.log("You get your income from your pension");
} else if (age<65&&age>=18){
    console.log("Each month you get a salary");
} else if(age<18){
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

var day = "Sunday";

switch(day){
    case 'Monday':
        console.log("yeesh");
    //...
    case 'Sunday':
        console.log("Let's Go");
    default:
        console.log("Day does not exist");
}