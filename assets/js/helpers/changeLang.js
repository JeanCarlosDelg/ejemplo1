let langIcon = document.querySelector('#language-toggle');

function changeLang() {
  if (localStorage.getItem('lang') === 'en') {
    langIcon.checked = true;
  } else {
    langIcon.checked = false;
  }
  langIcon.onclick = () => {
    if (langIcon.checked) {
      localStorage.setItem('lang', 'en');
      location.href = "assets/lang/index.html";
    } else {
      localStorage.setItem('lang', 'es');
      location.href = "/index.html";
    }
  };
} 
export default changeLang