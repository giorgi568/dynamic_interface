const el = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   const listOfBtns = btn.nextElementSibling;
//   listOfBtns.classList.toggle('to-hide');
//   listOfBtns.classList.toggle('transitioned');
// });
el.addEventListener('click', () => {
  dropDown(el);
});

function dropDown(el) {
  const btn = el;
  const listOfBtns = btn.nextElementSibling;
  listOfBtns.classList.toggle('to-hide');
  listOfBtns.classList.toggle('transitioned');
}
