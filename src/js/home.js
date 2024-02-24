import axios from 'axios';

axios.defaults.baseURL = `https://books-backend.p.goit.global/books`;

const backendAPI = {
  getCategoryList: async function () {
    try {
      const response = await axios.get(`/category-list`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getBestSellers: async function () {
    try {
      const response = await axios.get(`/top-books`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getSelectedCategory: async function (category) {
    try {
      const response = await axios.get(`/category?category=${category}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getBookDescription: async function (id) {
    try {
      const response = await axios.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

const categoriesBooksList = document.querySelector('.categories-books-list');

const bestSellers = await backendAPI.getBestSellers();

function renderBooks(elements) {
  console.log(elements);
  const markup = elements
    .map(({ books, list_name }) => {
      return `<li class="categories-item">${list_name}
        <ul class="categories-books-list"> 
        ${books
          .map(({ book_image, title, author }) => {
            return `<li class="categories-item">
             <img class="categories-img" src='${book_image}' alt="" />
             <h3 class="categories-book-title">${title}</h3>
              <p class="categories-book-author">${author}</p>
            </li>`;
          })
          .join('\n')}
            </ul >
            </li >
            <button class="categories-btn" type="button">See more</button>`;
    })
    .join('\n');

  categoriesBooksList.insertAdjacentHTML('beforeend', markup);
}

renderBooks(bestSellers);
