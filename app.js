document.addEventListener('DOMContentLoaded', function () {
  const navigateElements = document.querySelectorAll('header a');

  navigateElements.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const sectionId = e.currentTarget.hash;
      scrollToResult(sectionId);
    })
  })

  backgroundNav();
  toggleMobileMenu();
});

function scrollToResult(el) {
  const mobileMenu = document.querySelector('.menu');
  let offset = document.querySelector(`${el}`).offsetTop;
  console.log(offset)
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': offset
  });
  mobileMenu.classList.remove('open');
}

function backgroundNav() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < 100 && window.innerWidth > 576) {
    document.querySelector('.menu').style.background = "none";
  } else {
    document.querySelector('.menu').style.background = "#414345";
  }
  prevScrollpos = currentScrollPos;
  }
}

function toggleMobileMenu() {
  const menu = document.querySelector('.menu');
  document.querySelector('.hamburger').addEventListener('click', e => {
    e.currentTarget.classList.toggle('open');
    menu.classList.toggle('open');
  });
}