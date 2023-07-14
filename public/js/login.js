async function loginUser(e) {
  e.preventDefault();
  const responseEl = document.getElementById('api-response');
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();

  if (response.ok) {
    responseEl.classList.add('!text-success-main');
    responseEl.textContent = 'Logged in successfully!!';
    setTimeout(() => {
      responseEl.innerHTML = '&ThickSpace;';
      location.replace('/');
    }, [1500]);
  } else {
    responseEl.classList.remove('!text-success-main');
    responseEl.textContent = data.message;
    setTimeout(() => {
      responseEl.innerHTML = '&ThickSpace;';
    }, [2000]);
  }
}

document.getElementById('login-form')?.addEventListener('submit', loginUser);
