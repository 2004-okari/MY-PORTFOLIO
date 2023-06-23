//  Hamburger Menu

const dropDown = document.getElementById('icon-1');
const closeUp = document.getElementById('close');
const items = document.querySelector('.img-1-nav');
const closePort = document.querySelector('.refer-1');
const closeAbout = document.querySelector('.refer-2');
const closeCont = document.querySelector('.refer-3');

const opening = () => { items.style.visibility = 'visible'; };
const closing = () => { items.style.visibility = 'hidden'; };

dropDown.addEventListener('click', opening);
closeUp.addEventListener('click', closing);
closePort.addEventListener('click', closing);
closeAbout.addEventListener('click', closing);
closeCont.addEventListener('click', closing);
