const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('div[aria-labelledby="menu-button"]');
const menuItems = document.querySelectorAll('button div[role="menu"] a');

const menuButtons = document.querySelectorAll('.menu-button');
const menus = document.querySelectorAll('div[aria-labelledby="menu-button"]');
const deletePostButtons = document.querySelectorAll('.delete-post-button');
const postDeleteDialog = document.querySelector('#post-delete-dialog');
const cancelDeleteButton = document.querySelector('#cancel-delete-post-button');
const confirmDeleteButton = document.querySelector(
  '#confirm-delete-post-button',
);

const showDialog = () => postDeleteDialog?.showModal();
const closeDialog = () => postDeleteDialog?.close();

function toggleMenu(event) {
  const menu = event.target.nextElementSibling;
  const expanded = event.target.getAttribute('aria-expanded') === 'true';
  event.target.setAttribute('aria-expanded', !expanded);
  const children = [...menu.children[0].children];
  children.forEach((item) =>
    item.setAttribute(
      'tabindex',
      item.getAttribute('tabindex') === '-1' ? '0' : '-1',
    ),
  );

  setTimeout(() => {
    menu.classList.toggle('hidden');
  }, [150]);
}

deletePostButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const postId = button.getAttribute('data-post-id');
    confirmDeleteButton.setAttribute('data-post-id', postId);
    showDialog();
  });
});

cancelDeleteButton?.addEventListener('click', closeDialog);

menuButtons.forEach((button) => {
  button.addEventListener('click', toggleMenu);
});

// menuButton?.addEventListener('click', () => {
//   const expanded = menuButton.getAttribute('aria-expanded') === 'true';
//   menuButton.setAttribute('aria-expanded', !expanded);

//   menuItems.forEach((item) => {
//     item.setAttribute(
//       'tabindex',
//       item.getAttribute('tabindex') === '-1' ? '0' : '-1',
//     );
//   });
//   setTimeout(() => {
//     menu.classList.toggle('hidden');
//   }, [150]);
// });

confirmDeleteButton?.addEventListener('click', async (event) => {
  event.preventDefault();
  const postId = event.target.getAttribute('data-post-id');

  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
  });

  const data = await response.json();

  if (response.ok) {
    location.replace('/dashboard');
  } else {
    console.log(data);
  }
});
