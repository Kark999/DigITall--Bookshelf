import * as basicLightbox from 'basiclightbox';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { showHeaderNav, hideHeaderNav } from './heder';
import icon from '../img/icons.svg';

const firebaseConfig = {
  apiKey: 'AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8',
  authDomain: 'digitall-project10.firebaseapp.com',
  projectId: 'digitall-project10',
  storageBucket: 'digitall-project10.appspot.com',
  messagingSenderId: '618447253868',
  appId: '1:618447253868:web:8e9934944d76f91f920349',
};

const homeButton = document.querySelector('.header-nav-link-home');
const shopButton = document.querySelector('.header-nav-link-shop');
const sighUpButton = document.querySelector('.header-sigh-up-button');
const userButton = document.querySelector('.header-js-user-profile');
const userName = document.querySelector('.header-user-name');
const showLogOut = document.querySelector('.header-triangle-icon-button');
const logOutButton = document.querySelector('.header-log-out-button');
showLogOut.addEventListener('click', () => {
  logOutButton.classList.add('log-out-visible');
  logOutButton.disabled = false;
});
logOutButton.addEventListener('click', () => logout());
const btnLogout = document.querySelector('.header-js-user-profile');
const userNameElem = document.querySelector('.js-user-name');
const button = document.querySelector('.header-sigh-up-button');
const app = initializeApp(firebaseConfig);
const auth = getAuth();
document.addEventListener('DOMContentLoaded', e => userIsLogin());
export function userIsLogin() {
  if (JSON.parse(localStorage.getItem('userInfo'))) {
    sighUpButton.classList.add('hidden');
    userButton.classList.add('visible-flex');
    userName.textContent = JSON.parse(localStorage.getItem('userInfo'));
    homeButton.classList.add('visible-flex');
    shopButton.classList.add('visible-flex');
  }
  return;
}
button.addEventListener('click', onButtonClick);

function onButtonClick() {
  instanceSignUp.show(onInstanceSignUpShow);
}

const signUpMarkup = `<form class="authorization-form">
  <button class="authorization-button-close" type="button">
  <svg class="authorization-icon-close" width="12" height="12">
  <use href=${icon}#x-close></use></svg></button>
  <fieldset class="authorization-fieldset">
  <input class="authorization-input" type="text" name="name" maxlength="10" placeholder="Name">
  <label class="authorization-label">
  <input class="authorization-input" type="email" name="email" required placeholder="Email">
  <svg class="authorization-icon" width="18" height="18">
  <use href=${icon}#mail></use></svg>
  </label>
  <label class="authorization-label">
  <input class="authorization-input" type="password" name="password" required minlength="6" placeholder="Password" >
  <svg class="authorization-icon" width="18" height="18">
  <use href=${icon}#lock></use></svg>
  </label>
  </fieldset>
  <button class="authorization-button" type="submit">Sign up</button>
  <div class="authorization-button-wrapper">
  <button class="sign-up-btn make-active" type="button">Sign Up</button>
  <button class="sign-in-btn js-signin-btn" type="button">Sign in</button></div>
</form>
`;
const instanceSignUp = basicLightbox.create(signUpMarkup, {
  className: 'authorization-lightbox',
  onShow: instance => {
    // instance
    //   .element()
    //   .querySelector('form')
    //   .addEventListener('submit', onFormSubmit);
    // instance
    //   .element()
    //   .querySelector('.js-signin-btn')
    //   .addEventListener('click', instanceSignIn.show);
    // instanceSignIn.close();
  },
  onClose: onInstanceClose,
});
function onInstanceSignUpShow(i) {
  const refsInstance = {
    buttonClose: i.element().querySelector('.authorization-button-close'),
    form: i.element().querySelector('.authorization-form'),
    fieldset: i.element().querySelector('.authorization-fieldset'),
    submitButton: i.element().querySelector('.authorization-button'),
    signUpBtn: i.element().querySelector('.sign-up-btn'),
    signInBtn: i.element().querySelector('.sign-in-btn'),
  };
  refsInstance.buttonClose.addEventListener('click', () => i.close());
  refsInstance.form.addEventListener('submit', onFormSubmit);
  refsInstance.signUpBtn.addEventListener('click', e => {
    refsInstance.submitButton.textContent = 'Sign up';
    refsInstance.signUpBtn.classList.add('make-active');
    refsInstance.signInBtn.classList.remove('make-active');
    refsInstance.fieldset.firstElementChild.classList.remove('hidden');
  });
  refsInstance.signInBtn.addEventListener('click', e => {
    refsInstance.submitButton.textContent = 'Sign in';
    refsInstance.signUpBtn.classList.remove('make-active');
    refsInstance.signInBtn.classList.add('make-active');
    refsInstance.fieldset.firstElementChild.classList.add('hidden');
  });
}
function onInstanceClose(i) {
  const refsInstance = {
    buttonClose: i.element().querySelector('.authorization-button-close'),
    form: i.element().querySelector('.authorization-form'),
    fieldset: i.element().querySelector('.authorization-fieldset'),
    submitButton: i.element().querySelector('.authorization-button'),
    signUpBtn: i.element().querySelector('.sign-up-btn'),
    signInBtn: i.element().querySelector('.sign-in-btn'),
  };
  refsInstance.fieldset.firstElementChild.classList.remove('hidden');
  refsInstance.signInBtn.classList.remove('make-active');
  refsInstance.signUpBtn.classList.add('make-active');
}
const instanceSignIn = basicLightbox.create(
  `<form class="authorization-form">
    <input type="email" name="email" required>
    <input type="password" name="password" required minlength="6" >
    <button class="authorization-button js-signup-btn">Sign in
    </button>
  </form>
  <button class="js-btn-signup">Sign Up</button>`,
  {
    onShow: instance => {
      instance
        .element()
        .querySelector('.js-btn-signup')
        .addEventListener('click', instanceSignUp.show);
      instanceSignUp.close(() => console.log(instanceSignUp.element()));
    },
  }
);

function onSignIn(e) {
  e.preventDefault();
  let email = e.target.elements.email.value;
  let password = e.target.elements.password.value;

  signIn(email, password);
  e.target.reset();
}

function signUp(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      updateProfile(user, { displayName: name });
      localStorage.setItem('userInfo', JSON.stringify(name));
      instanceSignUp.close(() => {
        userIsLogin();
      });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
}

function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      userName.textContent = user.displayName;
      localStorage.setItem('userInfo', JSON.stringify(user.displayName));
      userIsLogin();
      // showHeaderNav();
      // instanceSignIn.close();
      console.log(user.displayName);

      instanceSignUp.close();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function onFormSubmit(e) {
  e.preventDefault();
  const whatNeedToDo = e.currentTarget.querySelector(
    '.authorization-button'
  ).textContent;

  let name = e.target.elements.name.value;
  let email = e.target.elements.email.value;
  let password = e.target.elements.password.value;
  if (whatNeedToDo === 'Sign up') {
    signUp(email, password, name);
    // userNameElem.textContent = name;
  } else if (whatNeedToDo === 'Sign in') {
    signIn(email, password);
    // instanceSignUp.close();
  }
  e.currentTarget.reset();
}

// ------LOG OUT----------//
function logout() {
  if (location.pathname.includes('shopping-list')) {
    location.pathname = '/';
  }
  localStorage.removeItem('userInfo');
  logOutButton.classList.remove('log-out-visible');

  sighUpButton.classList.remove('hidden');
  userButton.classList.remove('visible-flex');

  homeButton.classList.remove('visible-flex');
  shopButton.classList.remove('visible-flex');
}

// btnLogout.addEventListener('click', logout);
