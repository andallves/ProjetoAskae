const btn = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
const menuButtonIcon = document.querySelectorAll('div.icon-bar');

btn.addEventListener('click', (ev) => {
  ev.preventDefault();
  menu.classList.toggle("menu-show");
  for (const bar of menuButtonIcon) {
    bar.classList.toggle("open");

  }
})