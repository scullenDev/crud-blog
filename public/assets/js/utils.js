const page = document.body.id;
const urlParams = new URLSearchParams(location.search);
const id = urlParams.get('id');

const headers = {
  'Content-Type': 'application/json',
};

const getCategories = () => {
  const categoriesEl = document.getElementById('categories');
  categoriesEl.textContent = '';

  if (page === 'index') {
    categoriesEl.insertAdjacentHTML('beforeend', '<option value="" selected>All</option>');
  }

  fetch('/api/categories')
    .then((res) => res.json())
    .then((categories) => {
      for (const { id, name } of categories) {
        const option = `<option value="${id}">${name}</option>`;
        categoriesEl.insertAdjacentHTML('beforeend', option);
      }
    });
};

document.getElementById('addCategory').addEventListener('submit', (e) => {
  e.preventDefault();
  const categoryInput = document.getElementById('category');
  const category = categoryInput.value.trim();
  categoryInput.value = '';

  fetch('/api/categories', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ name: category }),
  })
    .then(() => getCategories())
    .catch((err) => console.log(err));
});

getCategories();