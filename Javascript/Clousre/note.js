//var x = f; // f is a reference to the function, and now x is too

//If you want to create an anonymous function, leave out the name:


// var f = function () {
//     alert("I've been assigned to f");
// }; //function literal

//If you imagine it like a string literal you’ll see it’s an expression just like any other literal, and so it can be assigned to a variable:

//A closure is a function with access to variables in its containing scope(Outer Scope) (the function “closes over” the variables). 
function outer() {
    var counter = 0;

    function inner() {
        alert(counter);
        counter++;
    }
    return inner;
}

var x = outer(); // As we're calling outer here, x is a reference to inner 
x(); // alerts 0
x(); // alerts 1
x(); // alerts 2

//The closure has access to any arguments in the containing scope as well:

function outer(x) {
    function inner() {
        alert(x);
    }
    return inner;
}

var func = outer(5);
func(); //alerts 5 - inner has access to the argument

//A more advanced example
function CatMaker(name) {
    var age = 10;

    //construct an object on the fly with three methods.
    //All methods have access to age, but age cannot be
    //directly accessed outside of this function.
    return {
        "sayHello": function() { //first method
            alert("Miaow");
        },
        "getAge": function(inCatYears) { //second method
            if (inCatYears) {
                return age * 7;
            } else {
                return age;
            }
        },
        "makeOlder": function() { //third method
            age++;
        }
    };
}

var mycat = CatMaker('Snuffles');
mycat.getAge(true); //returns 70
mycat.makeOlder();
mycat.getAge(true); //returns 77