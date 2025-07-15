(function () {

  const swiper = new Swiper('.hero__swiper', {
    
    loop: true,

    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1500,
  });
  /* ================ Дроп===================== */
const dropdownButton = document.getElementById('dropdown__btn');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

  /* =================Бургер===================== */
  document.addEventListener('click', burgerInit);

function burgerInit(e) {
  const burgerIcon = e.target.closest('.burger-icon')
  const burgerNavLink = e.target.closest('.burger-nav__link')
  
  if (!burgerIcon && !burgerNavLink) return
  if (document.documentElement.clientWidth > 900) return
  
if (burgerNavLink && burgerNavLink.hasAttribute('data-dropdown-link')) {
    return
  }

  if (!document.body.classList.contains('body--opened-menu')) {
    document.body.classList.add('body--opened-menu')
  } else {
    document.body.classList.remove('body--opened-menu')
  }
}

  /* =====================Модалка========================== */
  const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.about__img-button');

if (modal && modalButton) {
  modalButton.addEventListener('click', openModal);
  modal.addEventListener('click', closeModal);
}

function openModal(e) {
  e.preventDefault();
  document.body.classList.toggle('body--opened-modal');
}

function closeModal(e) {
  e.preventDefault();
  const target = e.target;
  if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
    document.body.classList.remove('body--opened-modal');
  }
}

})()