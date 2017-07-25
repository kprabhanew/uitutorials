// var i = -1;
// var f = (function(state) { // this will hold a snapshot of i
//     return function() {
//         return state; // this returns what was in the snapshot
//     };
// })(i); // here we invoke the outermost function, passing it i (which is -1).
// // it returns the inner function, with state as -1
// i = 1; // has no impact on the state variable
// f(); // now we invoke the inner function, and it looks up state, not i

// function outer() {
//     var counter = 0;

//     function inner() {
//         alert(counter);
//         counter++;
//     }
//     return inner;
// }

// var x = outer(); // As we're calling outer here, x is a reference to inner 
// x(); // alerts 0
// x(); // alerts 1
// x(); // alerts 2

// //outer is called once, and returns inner.
// //x is a reference to inner(Clousre)
// // it has access to outer‘s local variable, counter.
// //Even though outer has returned, inner still has access to outer‘s variables.

// // if outer were called again, we’d get a new version of inner.
// // var y = outer(); // Call outer again
// // y(); // alerts 0 - this is a different closure to the previous one.

// //The closure has access to any arguments in the containing scope as well:

// // function outer(x) {
// //     function inner() {
// //         alert(x);
// //     }

// //     return inner;
// // }

// // var func = outer(5);
// // func();

// function CatMaker(name) {
//     var age = 10;

//     return {
//         "sayHello": function() {
//             alert("miaow");
//         },

//         "getAge": function(inCatYears) {
//             if (inCatYears) {
//                 return age * 7;
//             } else {
//                 return age;
//             }
//         },
//         "makeOlder": function() {
//             age++;
//         }
//     };
// }

// var myCat = CatMaker('snnuffles');
// mycat.getAge(true);
// mycat.makeOlder();
// mycat.getAge(true);

$(document).ready(function() {
    function attachClousre(i) {
        $('#id-' + i).click(function() {
            alert("I am element number " + i);
        });
    }

    (function attachListeners() {
        for (var i = 0; i < 3; i++) {
            attachClousre(i);
        }
    })()

    //attachListeners();
})