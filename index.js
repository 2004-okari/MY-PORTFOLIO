let dropDown = document.getElementById("icon-1");
let closeUp = document.getElementById("close");
let items = document.querySelector('.img-1-nav');
let closePort = document.querySelector(".refer-1");
let closeAbout = document.querySelector(".refer-2");
let closeCont = document.querySelector(".refer-3");

let opening = () => {items.style.visibility = "visible"};
let closing = () => {items.style.visibility = "hidden"};

dropDown.addEventListener('click', opening);
closeUp.addEventListener('click', closing);
closePort.addEventListener('click', closing);
closeAbout.addEventListener('click', closing);
closeCont.addEventListener('click', closing);
