async function logoutUser() {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const message = (await response.json()).message;

  if (response.ok) {
    location.replace('/');
  } else {
    alert(message);
  }
}

document.getElementById('logout-button')?.addEventListener('click', logoutUser);
