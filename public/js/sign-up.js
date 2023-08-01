async function signUpUser(e) {
  e.preventDefault();
  const responseEl = document.getElementById('api-response');
  const first_name = document.getElementById('first-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const response = await fetch('/api/users/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ first_name, email, password }),
  });
  const message = (await response.json()).message;

  if (response.ok) {
    responseEl.classList.add('!text-success-main');
    responseEl.textContent = message;
    setTimeout(() => {
      responseEl.innerHTML = '&ThickSpace;';
      location.replace('/dashboard');
    }, [1500]);
  } else {
    responseEl.classList.remove('!text-success-main');
    responseEl.textContent = message;
    setTimeout(() => {
      responseEl.innerHTML = '&ThickSpace;';
    }, [3000]);
  }
}

document.getElementById('sign-up-form').addEventListener('submit', signUpUser);
