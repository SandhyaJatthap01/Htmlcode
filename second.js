// Selectors
const searchForm = document.querySelector('.search-form');
const shoppingCart = document.querySelector('.shopping-cart');
const loginForm = document.querySelector('.login-form');
const navbar = document.querySelector('.navbar');

const searchBtn = document.querySelector('#search-btn');
const cartBtn = document.querySelector('#cart-btn');
const loginBtn = document.querySelector('#login-btn');
const menuBtn = document.querySelector('#menu-btn');

// Function to toggle visibility
const toggleVisibility = (activeForm) => {
    const forms = [searchForm, shoppingCart, loginForm, navbar];
    forms.forEach(form => {
        if (form !== activeForm) {
            form.classList.remove('active');
        } else {
            form.classList.toggle('active');
        }
    });
};

// Event Listeners
searchBtn.onclick = () => toggleVisibility(searchForm);
cartBtn.onclick = () => toggleVisibility(shoppingCart);
loginBtn.onclick = () => toggleVisibility(loginForm);
menuBtn.onclick = () => toggleVisibility(navbar);

// Hide all forms on scroll
window.onscroll = () => {
    [searchForm, shoppingCart, loginForm, navbar].forEach(form => form.classList.remove('active'));
};

// Initialize Swiper
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});