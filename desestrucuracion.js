"use strict";
//desestrucatacion
const avenger = {
    nombre: 'juan',
    clave: 'capitan america'
};
const { nombre, clave } = avenger;
console.log(nombre);
const avengers = ['thor', 'iroman', 'spiderman'];
console.log(avengers[0]);
const [thor, iroman, spiderman] = avengers;
console.log(iroman);
