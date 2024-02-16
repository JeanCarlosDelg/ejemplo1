const bodyDOM = document.querySelector('body');
const buttonSwitch = document.querySelector('#switch');

function darkMode() {
   bodyDOM.classList.toggle('dark-mode');
   buttonSwitch.classList.toggle('active')
 }
buttonSwitch.addEventListener('click', darkMode);

export default darkMode;