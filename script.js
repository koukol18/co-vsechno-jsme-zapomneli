"use strict"

console.log("Hello world!!");

console.log("-------------");

const rokNarozeni = 2002;

if ((2020 - rokNarozeni) >= 18) {
  console.log("Je plnoletý")
} else {
  console.log("Není plnoletý")
}

console.log("-------------");

const zaci = [
  {jmeno: 'Dominik Lederer',rok: 2003, trida: '3.G'},
  {jmeno: 'Majk Svoboda',rok: 2001, trida: '3.G'},
  {jmeno: 'Petr Zdražil',rok: 2002, trida: '3.G'}
];/*
for (let index = 0; index < zaci.length; index++) {

  if ((2020 - zaci[index].rok) >= 18) {
  console.log(zaci[index].jmeno + " je plnoletý.")
} else {
  console.log(zaci[index].jmeno + " není plnoletý.")
};
};

console.log("-------------");
*/

zaci.forEach (zak => {
  let stav = ((2020 - zak.rok) >= 18) ? " je plnoletý." : " není plnoletý.";
  console.log(zak.jmeno + stav);

  let p = document.createElement("p");
  p.textContent = zak.jmeno + stav;
  if ((2020 - zak.rok) >= 18) {
  console.log(zak.jmeno + " je plnoletý.")
  p.style.color = "green";
} else {
  console.log(zak.jmeno + " není plnoletý.")
  p.style.color = "red";
};
  document.body.appendChild(p);
})

