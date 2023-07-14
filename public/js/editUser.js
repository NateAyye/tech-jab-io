function init() {
  const form = document.querySelector('#edit-user-form');
  const editUserDialog = document.querySelector('#edit-user-dialog');
  const editUserButton = document.querySelector('#edit-user-button');
  const editUserCancelButton = document.querySelector(
    '#edit-user-cancel-button',
  );
  const editUserSaveButton = document.querySelector('#edit-user-save-button');

  editUserButton?.addEventListener('click', () => {
    editUserDialog?.showModal();
  });

  editUserCancelButton?.addEventListener('click', () => {
    editUserDialog?.close();
  });

  editUserSaveButton?.addEventListener('click', async (event) => {
    event.preventDefault();
    const userId = event.target.getAttribute('data-user-id');
    const formData = new FormData(form);
    const user = {};
    formData.forEach((value, key) => {
      if (key === 'avatar') return;
      user[key] = value;
    });
    console.log(user);

    const response = await fetch(`/api/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      // headers: { 'Content-Type': 'multipart/form-data' },
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (response.ok) {
      editUserDialog?.close();
      location.reload();
    } else {
      // TODO: Handle error with pop-up
      alert('Failed to edit user');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
