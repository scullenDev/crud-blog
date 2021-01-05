document.getElementById('addPost').addEventListener('submit', (e) => {
  e.preventDefault();
  const post = {
    title: document.getElementById('title').value.trim(),
    text: document.getElementById('text').value.trim(),
    CategoryId: document.getElementById('categories').value,
  };

  fetch('/api/posts', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(post),
  })
    .then(() => (location.href = '/'))
    .catch((err) => console.log(err));
});

document.getElementById('title').focus();
getCategories();
