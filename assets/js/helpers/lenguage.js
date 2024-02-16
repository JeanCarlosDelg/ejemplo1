const check = document.querySelector('.check')
check.addEventListener('click', idioma);

function idioma() {
  let id = check.checked;
  if (id === true) {
    location.href = 'en/index-en.html'
  } else {
    location.href = '../index.html'
  }
}
  

export default idioma