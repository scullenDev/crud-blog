const getPosts = (categoryId) => {
  const queryUrl = `/api/posts/${categoryId ? '?CategoryId=' + categoryId : ''}`;
  fetch(queryUrl)
    .then((res) => res.json())
    .then(displayPosts)
    .catch((err) => console.log(err));
};

const displayPosts = (posts) => {
  const postsEl = document.getElementById('posts');
  postsEl.textContent = '';

  for (const post of posts) {
    const { id, title, text } = post;
    const categoryName = post.Category?.name || 'Uncategorized';
    const postLi = `
    <li>
      <span class="category">Category: ${categoryName}</span>
      <h3><a href="/details?id=${id}">${title}</a></h3>
      <p class="text">${text.substring(0, 300)}</p>
      <p><a href="/details?id=${id}">Read more...</a></p>
    </li>
    `;
    postsEl.insertAdjacentHTML('afterbegin', postLi);
  }
};

document.getElementById('viewCategory').addEventListener('submit', (e) => {
  e.preventDefault();
  const categoryId = document.getElementById('categories').value;

  if (categoryId) {
    getPosts(categoryId);
  } else {
    getPosts();
  }
});

getPosts();
getCategories();
