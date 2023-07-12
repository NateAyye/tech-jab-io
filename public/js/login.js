async function loginUser() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    location.replace('/');
  } else {
    alert('Something went wrong');
  }
}
