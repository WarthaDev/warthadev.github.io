var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        // deafault hitam putih navbar
        if (window.pageYOffset > 15) {
          nav.classList.add('navbar-light', 'bg-light', 'shadow',);
        } else {
          nav.classList.remove('navbar-dark', 'bg-light', 'shadow',);
        }
        if (window.pageYOffset < 10) {
          nav.classList.add('navbar-dark',);
        } else {
          nav.classList.remove('navbar-dark',);
        }

      });