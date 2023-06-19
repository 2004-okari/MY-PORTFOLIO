let dropDown = document.getElementById("icon-1");
let closeUp = document.getElementById("close");
let items = document.querySelector('.img-1-nav');

let opening = () => {items.style.visibility = "visible"};
let closing = () => {items.style.visibility = "hidden"};

dropDown.addEventListener('click', opening);
closeUp.addEventListener('click', closing);
