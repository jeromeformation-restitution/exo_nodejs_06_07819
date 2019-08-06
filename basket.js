var evenement = require('events');
const emitter = evenement.EventEmitter;

const match = new emitter();


//je Declare ma function
/*
let functionGame = function () {
};
*/

let points = {
    "Doranco": 0,
    "PSG": 0
};
let functionGame = (point, team)=>{
    points[team] += point;
    console.log(points)
};

match.addListener( 'newPoints', functionGame);

console.log(' c\'est parti');
console.log(match.emit('newPoints', 2, 'Doranco'));
console.log(match.emit('newPoints', 22, 'PSG'));


