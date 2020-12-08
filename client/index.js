const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fname = form.fname.value;
  const lname = form.lname.value;
  const email = form.email.value;
  const password = form.password.value;
  fetch('http://localhost:1604/submit', {
    method: 'post',
    body: JSON.stringify({
      fname,
      lname,
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((x) => {
    form.reset();
  });
});
