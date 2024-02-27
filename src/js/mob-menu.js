import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function createMenuContent() {
  const menuContent = `
    <div class="menu-user-profile">
      <div class="menu-user-icon-wrapper">
        <svg class="menu-user-icon" width="19" height="19">
          <use href="./img/icons.svg#user-fill"></use>
        </svg>
      </div>
      <p class="menu-user-name">User</p>
      </div>
      <ul id="menu-list" class="menu-nav-list">
        <li class="menu-nav-item">
          <a class="menu-nav-link menu-nav-link-home make-yellow" href="./index.html">Home</a>
        </li>
        <li class="menu-nav-item">
          <a class="menu-nav-link menu-nav-link-shop shopping-link" href="../shopping-list.html">
            Shopping List
            <span class="shoping-test">
              <svg class="menu-nav-icon-shop" width="20" height="20">
                <use href="./img/icons.svg#uil-cart"></use>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="menu-log-out">
    <button type="button" class="log-out-btn">
        Log out
        <svg class="log-out-icon" width="20" height="20">
          <use href="./img/icons.svg#arrow-narrow-right"></use>
        </svg>
      </button>
      </div>
  `;
  return menuContent;
}
const query = document.querySelector('header');
query.style.zIndex = 99999;
query.style.position = 'relative';
query.style.background = '#fff';

function menuOpen() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const menuContent = createMenuContent();
  menuContainer.innerHTML = menuContent;

  const menuModal = basicLightbox.create(menuContainer, {
    className: 'mob-menu-lightbox',
  });

  const menuButtonHeader = document.querySelector('.header-modal-open-button');
  const menuButtonParent = menuButtonHeader.parentElement;
  const closeButton = document.createElement('button');
  closeButton.classList.add('header-menu-close-button');
  menuButtonHeader.classList.add('hidden-on-desktop'); // remove mob-menu open button from screen 768px and more
  closeButton.setAttribute('type', 'button');
  closeButton.innerHTML = `
    <svg class="header-menu-close-icon" width="18" height="18">
      <use href="./img/icons.svg#x-close"></use>
    </svg>
  `;
  closeButton.addEventListener('click', () => {
    menuModal.close();
    menuButtonHeader.style.display = 'block';
    menuButtonParent.removeChild(closeButton);
  });
  menuButtonParent.insertBefore(closeButton, menuButtonHeader.nextSibling);
  menuButtonHeader.style.display = 'none';

  menuModal.show();
}

const menuButton = document.querySelector('.header-modal-open-button');
menuButton.addEventListener('click', menuOpen);
