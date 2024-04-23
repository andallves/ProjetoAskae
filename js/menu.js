const btn = document.querySelector('#menu-button');

btn.addEventListener('click', (ev) => {
  ev.preventDefault();
  const menuItens = document.querySelector('#menu').classList.toggle("menu-show");
})