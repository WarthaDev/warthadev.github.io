var nav = document.querySelector('nav');
var metaThemeColor = document.querySelector('meta[name="theme-color"]');
var defaultThemeColor = window.getComputedStyle(document.documentElement).getPropertyValue('--theme-color');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 50) {
    nav.classList.add('navbar-light', 'bg-costume', 'shadow');
    nav.classList.remove('navbar-dark', 'opacity-background');

    document.documentElement.style.setProperty('--theme-color', defaultThemeColor);
    metaThemeColor.setAttribute('content', defaultThemeColor);
  } else {
    nav.classList.add('navbar-dark', 'opacity-background');
    nav.classList.remove('navbar-light', 'bg-costume', 'shadow');

    metaThemeColor.setAttribute('content', '#000000');
  }
});

if (window.pageYOffset > 50) {
  nav.classList.add('navbar-light', 'bg-costume', 'shadow');
} else {
  nav.classList.add('navbar-dark', 'opacity-background');
  
  metaThemeColor.setAttribute('content', '#000000');
}
