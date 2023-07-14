async function likePost(id) {
  const btn = document.querySelectorAll(`button[onclick="likePost(${id})"]`)[0];
  const small = btn.querySelector('small');
  const likes = parseInt(btn.dataset.postLikes);
  const data = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ likes: likes + 1 }),
  });
  if (data.ok) {
    btn.dataset.postLikes = likes + 1;
    small.textContent = likes + 1;
  } else {
    alert('Something went wrong');
  }
}
async function dislikePost(id) {
  const btn = document.querySelectorAll(
    `button[onclick="dislikePost(${id})"]`,
  )[0];
  const small = btn.querySelector('small');
  const dislikes = parseInt(btn.dataset.postDislikes);
  const data = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ dislikes: dislikes + 1 }),
  });
  if (data.ok) {
    btn.dataset.postDislikes = dislikes + 1;
    small.textContent = dislikes + 1;
  } else {
    alert('Something went wrong');
  }
}
