document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Sticky header shrinking (optional existing feature)
  const header = document.querySelector('header');
  const shrinkOn = 100; // px scroll before shrinking
  window.addEventListener('scroll', () => {
    if (window.scrollY > shrinkOn) {
      header.classList.add('header-shrink');
    } else {
      header.classList.remove('header-shrink');
    }
  });

  // Hide header on scroll down / show on scroll up
  let lastScrollY = window.pageYOffset;
  const delta = 5; // minimum change to act
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;

    if ( Math.abs(lastScrollY - currentScrollY) <= delta ) {
      // too small scroll => ignore
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
      // Scrolling down & past header height → hide header
      header.classList.add('nav-up');
      header.classList.remove('nav-down');
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up → show header
      header.classList.add('nav-down');
      header.classList.remove('nav-up');
    }

    lastScrollY = currentScrollY;
  });

  // Scroll-to-top button
  const btnTop = document.createElement('button');
  btnTop.innerHTML = '↑';
  btnTop.id = 'btnScrollTop';
  btnTop.style.position = 'fixed';
  btnTop.style.bottom = '20px';
  btnTop.style.right = '20px';
  btnTop.style.padding = '10px 14px';
  btnTop.style.fontSize = '1.2rem';
  btnTop.style.display = 'none';
  btnTop.style.zIndex = '1000';
  btnTop.style.cursor = 'pointer';
  document.body.appendChild(btnTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTop.style.display = 'block';
    } else {
      btnTop.style.display = 'none';
    }
  });

  btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu toggle (hamburger)
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu    = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });
  }
});
