import { fetchData } from './fetchData';

// export function createCategoryList(data) {
//   return Array.from(
//     data,
//     item => `<li class="category-list-item">${item.list_name}</li>`
//   ).join('');
// }

// export async function fetchData(baseUrl, endPoint, selectedCategory = '') {
//   try {
//     const url = baseUrl + endPoint + selectedCategory;
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// }

const categoryList = document.querySelector('.category-list');

const BASE_URL = 'https://books-backend.p.goit.global/books';

const endPoints = {
  list: '/category-list',
  topbooks: '/top-books',
  category: '/category?category=',
  id: '/{id}',
};

async function createCategoryList() {
  const result = await fetchData(BASE_URL, endPoints.list);
  const titleMarkup = `<h2 class="category-title">All categories</h2>`;
  const itemsMarkup = result
    .map(
      item =>
        `<li class="category-item"><p class="category-text">${item.list_name}</p></li>`
    )
    .join('');
  const mainMarkup = titleMarkup + itemsMarkup;
  categoryList.innerHTML = mainMarkup;
}

createCategoryList();

// Show hide function
function showElement(elem) {
  elem.classList.add('visible');
  elem.classList.remove('hidden');
}

function hideElement(elem) {
  elem.classList.remove('visible');
  elem.classList.add('hidden');
}