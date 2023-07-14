const commentForm = document.querySelector('#comment-form');

commentForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(commentForm);
  const comment = {};
  formData.forEach((value, key) => {
    comment[key] = value;
  });
  
  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (response.ok) {
    location.reload();
  } else {
    alert('Failed to add comment');
  }
});
