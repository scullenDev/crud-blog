document.getElementById('editPost').addEventListener('submit', (e) => {
  e.preventDefault();
  const post = {
    title: document.getElementById('title').value.trim(),
    text: document.getElementById('text').value.trim(),
    CategoryId: document.getElementById('categories').value,
  };

  fetch(`/api/posts/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(post),
  })
    .then(() => {
      alert(`Successfully updated the post '${post.title}'!`);
      location.href = '/';
    })
    .catch((err) => console.log(err));
});

document.querySelector('.delete').addEventListener('click', () => {
  fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    headers: headers,
  })
    .then(() => {
      alert(`Successfully deleted the post with id '${id}'!`);
      location.href = '/';
    })
    .catch((err) => console.log(err));
});

fetch(`/api/posts/${id}`)
  .then((res) => res.json())
  .then(({ title, text, CategoryId }) => {
    document.getElementById('title').value = title;
    document.getElementById('text').value = text;
    document.getElementById('categories').value = CategoryId;
  })
  .catch((err) => console.log(err));
