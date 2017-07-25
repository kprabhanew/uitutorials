let x = function() {
    console.log("i am from x")
}

let y = function(callback) {
    console.log("I am from y");
    callback();
}

y(x);

/*****************/

var add = function(a, b) {
    return (a + b);
}

var multiply = function(a, b) {
    return (a * b);
}

var doWhatEver = function() {
    console.log("Whatever you want ${a} and ${b}");
}

var calc = function(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(1, 2, add))

/******************** */
// Nested Callback Functions
// $.ajax({
//     url: url1,
//     data: data1,
//     success: function(d1) {
//         $.ajax({
//             url: url2,
//             data: d1,
//             success: function(d2) {
//                 $.ajax({
//                     ........
//                 });
//             }
//         });
//     }
// });

var promiseToCleanRoom = new Promise(function(resolve, reject) {

    var isClean = false;

    if (isClean) {
        resolve('clean');
    } else {
        reject('not clean');
    }

})

promiseToCleanRoom.then(function(fromResolve) {
    console.log('Room cleansed');
}).catch(function(fromReject) {
    console.log('Room not cleaned');
})
console.log('*********************');
/******************** */

var cleanRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('Cleaned The Room');
    });
}

var removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' reomve Garbage');
    })
}

var winIcecream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' Won Ice Cream')
    })
}

//call Promise cleanRoom() ->  wait for promise done 
//after that then() will be called, we have the callback function
//once cleanRoom() finished then only removeGarbage called

// cleanRoom().then(function(result) {
//     return removeGarbage(result);
// }).then(function(result1) {
//     return winIcecream(result1);
// }).then(function(result2) {
//     console.log(result2);
// })

/****************** */

// Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
//     console.log('All Finished');
// })

// Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
//     console.log('One of them Finished');
// })