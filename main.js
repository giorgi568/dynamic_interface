const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const listOfBtns = btn.nextElementSibling;
  listOfBtns.classList.toggle('to-hide');
  listOfBtns.classList.add('transitioned');
});
