const formulario = document.querySelector('#form')
const modal = document.querySelector('#modal')
const closeButton = document.querySelector('#btn_close-modal')

function openModal() {
  modal.open = true
}

function closeModal() {
  modal.open = false
}

function sendEmailClear(e) {
  e?.preventDefault()
  const params = {
    name: document.getElementById('from_name').value,
    email: document.getElementById('email_id').value,
    message: document.getElementById('message').value
  }

  if (params.name && params.email && params.message) {
    emailjs.send('service_7m97cmf', 'template_7belglg', params).then(openModal())
  }

}

closeButton.addEventListener('click', closeModal)
formulario.addEventListener('submit', sendEmailClear)

export default sendEmailClear