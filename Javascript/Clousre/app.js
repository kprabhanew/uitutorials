// var global = 1;

// function outer() {
//     var outer_local = 2;

//     function inner() {
//         var inner_local = 3;
//         return inner_local + outer_local + global;
//     }
//     return inner();
// }

// console.log(outer());

/**************************/
// var a = "global variable";
// var F = function() {
//     var b = "local variable";
//     var N = function() {
//         var c = "inner local";
//     };
// };

/*************************/
// var a = "global variable";
// var F = function() {
//     var b = "local variable";
//     var N = function() {
//         var c = "inner local";

//         return b;
//     };

//     return N;
// };

// var inner = F();
// var b = inner();
// console.log(b);
/************************/
// var x = "global variable";
// (function() {
//     var y = "local variable";
//     var r = function() {
//         var z = "inner local";
//         return y;
//         //console.log(y);
//     };
// })()

/************************/

// var a = 1;

// function f() {
//     var b = 1;
//     return a;
// }
// f();

/************** */
// var inner; // placeholder
// var F = function() {
//     var b = "local variable";
//     var N = function() {
//         return b;
//     };
//     inner = N;
// };
/************** */
// function F(param) {
//     var N = function() {
//         return param;
//     }
//     param++;
//     return N;
// }

/**************/
// function F() {
//     var arr = [],
//         i;
//     for (i = 0; i < 3; i++) {
//         arr[i] = function() {
//             var b = i;
//             console.log(b);
//             return i;
//         };
//     }
//     return arr;
// }

// var arr = F();
// arr[0]();
/************** */
// var a = 1;

// function f() {
//     function n() {
//         alert(a);
//     }
//     var a = 2;
//     n();
// }
// f();

// function addOneListener(a) { //Each time i is bound to a different value
//     $('#id-' + a).click(function() {
//         alert("I am element number " + a);
//     });
//     alert(a);
// }

// function addEventListeners() {
//     for (var i = 0; i < 3; i++) {
//         addOneListener(i);
//     }
// }



// var TeslaModelS = function() {
//     this.numWheels = 4;
//     this.manufacturer = 'Tesla';
//     this.make = 'Model S';
// }

// TeslaModelS.prototype = function() {

//     var go = function() {
//         // Rotate wheels
//         alert('go');
//     };

//     var stop = function() {
//         // Apply brake pads
//         alert('stop');
//     };

//     return {
//         pressBrakePedal: stop,
//         pressGasPedal: go
//     }

// }();
// function CatMaker(name) {
//     var age = 10;

//     //construct an object on the fly with three methods.
//     //All methods have access to age, but age cannot be
//     //directly accessed outside of this function.
//     return { 
//         "sayHello": function () { //first method
//             alert("Miaow");
//         },
//         "getAge": function (inCatYears) { //second method
//             if (inCatYears) {
//                 return age * 7;
//             }
//             else {
//                 return age;
//             }
//         },
//         "makeOlder": function () { //third method
//             age++;
//         }
//     };
// }

// var mycat = CatMaker('Snuffles');
// mycat.getAge(true); //returns 70
// mycat.makeOlder();
// mycat.getAge(true); //returns 77

// var TeslaModelS = function() {
//     this.numWheels = 4;
//     this.manufacturer = 'Tesla';
//     this.make = 'Model S';
// }

// TeslaModelS.prototype = function() {

//     var go = function() {
//         // Rotate wheels
//         alert('go');
//     };

//     var stop = function() {
//         // Apply brake pads
//         alert('stop');
//     };

//     return {
//         pressBrakePedal: stop,
//         pressGasPedal: go
//     }

// }();

// var TelObj = new TeslaModelS();
// TelObj.make;
// TelObj.pressBrakePedal();

// function f(x) {
//     function g() {
//         return x;
//     }
//     return g;
// }



// //Tell f to create a new g
// var g5 = f(5);

// //g5 is a function that always returns 5
// alert(g5());

// //Tell f to create another new g
// var g1 = f(1);

// //g1 is a function that always returns 1
// alert(g1());

// function person(name) {
//     function get() {
//         return name;
//     }

//     function set(newName) {
//         name = newName;
//     }

//     return [get, set];
// }

// var getSetDave = person('Dave');
// var getDave = getSetDave[0];
// var setDave = getSetDave[1];

// alert(getDave()); //'Dave'

// setDave('Bob');

// alert(getDave()); //'Bob'


// var getSetMary = person('Mary');
// var getMary = getSetMary[0];
// var setMary = getSetMary[1];

// alert(getMary()); //'Mary'

//object
function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    console.log('Hi there, my name is ' + this.name);
};


//closure
function person(name) {
    //using object literal but state held in closure, not in object
    return {
        sayHi: function() {
            console.log('Hi there, my name is ' + name);
        }
    };
}