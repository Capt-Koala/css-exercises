const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');

function toggleModal() {
  const modalDiv = document.querySelector('.popup-modal');
  const backdrop = document.querySelector('.backdrop')
  if (modalDiv.classList.contains('show')) {
    modalDiv.classList.toggle('hide')
  }
  if (backdrop.classList.contains('show')) {
    backdrop.classList.toggle('hide')
  }
  modalDiv.classList.toggle('show');
  backdrop.classList.toggle('show');

}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);