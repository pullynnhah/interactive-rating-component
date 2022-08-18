function selectRating(element) {
  const selected = document.querySelector(".select");
  const submit = document.querySelector('.submit');
  if (selected) {
    selected.classList.remove("select");
  }
  element.classList.add("select");
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