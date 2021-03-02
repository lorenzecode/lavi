//
import { koty, psy } from './_tested';

psy();
koty();
console.log('LORENZE');

var element = document.getElementById('element');
element.innerHTML = '<b>daniel</b>';

let logo = document.getElementById('lg');
let url = window.location.pathname;
if (url == '/lorenze-front-boilerplate/dist/') {
  logo.innerHTML = '<h1>logo h1</h1>';
} else {
  logo.innerHTML =
    "<a href='/lorenze-front-boilerplate/dist/'>logo link teste</a>";
}

// HRM
if (module.hot) {
  module.hot.accept();
}
