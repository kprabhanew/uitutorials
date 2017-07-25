// function Gadget(name, color) {
//     this.name = name;
//     this.color = color;
//     this.whatAreYou = function() {
//         return 'I am a ' + this.color + ' ' + this.name;
//     };
// }
// Gadget.prototype.price = 100;
// Gadget.prototype.rating = 3;

// Gadget.prototype.getInfo = function() {
//     return 'Rating: ' + this.rating +
//         ', price: ' + this.price;
// };


// var newtoy = new Gadget('webcam', 'black');

// newtoy.name;

function Gadget(name) {
    this.name = name;
}
Gadget.prototype.name = 'mirror';

// toy.toString();
// toy.hasOwnProperty('toString');
// toy.constructor.hasOwnProperty('toString');
// toy.constructor.prototype.hasOwnProperty('toString');
// Object.hasOwnProperty('toString');
// Object.prototype.hasOwnProperty('toString');