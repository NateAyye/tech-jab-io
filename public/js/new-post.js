const warningDialog = document.getElementById('warning-dialog');
const postButton = document.getElementById('post-button');
const confirmationDialog = document.getElementById('confirmation-dialog');
const confirmationDialogCancelButton = document.getElementById(
  'confirmation-cancel-button',
);
const confirmationDialogConfirmButton = document.getElementById(
  'confirmation-button',
);

const postForm = document.getElementById('post-form');

postButton.addEventListener('click', async (event) => {
  event.preventDefault();
  confirmationDialog.showModal();
});

confirmationDialogCancelButton.addEventListener('click', () => {
  confirmationDialog.close();
});

confirmationDialogConfirmButton.addEventListener('click', async (event) => {
  event.preventDefault();
  const formData = new FormData(postForm);
  const post = {};
  formData.forEach((value, key) => {
    post[key] = value;
  });

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (response.ok) {
    confirmationDialog.close();
    location.replace('/dashboard');
  } else {
    console.log(data);
  }
});
