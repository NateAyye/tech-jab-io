async function logoutUser() {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 204) {
    location.replace('/');
  } else {
    // TODO: Handle error with pop-up
    alert('Failed to log out.');
  }
}

document.getElementById('logout-button')?.addEventListener('click', logoutUser);
