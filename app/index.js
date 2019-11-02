const $boton = document.getElementById('boton');
const $menu = document.getElementById('menu');
// console.log($boton);
// console.log($menu);

$boton.addEventListener('click', (event) => {
  console.log(event);
  $menu.classList.toggle('active1');
});