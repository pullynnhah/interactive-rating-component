function selectRating(event) {
  const selected = document.querySelector(".select");
  if (selected) {
    selected.classList.remove("select");
  }
  event.target.classList.add("select");
  submit.disabled = false;
}

function sendRating() {
  const rating = document.querySelector('.select').textContent;
  const choice = document.querySelector('.choice');
  const active = document.querySelector('.active');
  const thanks = document.querySelector('.thanks');
  
  choice.textContent = `You selected ${rating} out of 5`;
  active.classList.remove('active');
  thanks.classList.add('active');
}

const btns = document.querySelectorAll('button.circle');
const submit = document.querySelector('.submit');

for (const btn of btns) {
  btn.addEventListener('click', selectRating);
}

submit.addEventListener('click', sendRating);