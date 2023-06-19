var nav = document.querySelector('nav');
var metaThemeColor = document.querySelector('meta[name="theme-color"]');
var defaultThemeColor = window.getComputedStyle(document.documentElement).getPropertyValue('--theme-color');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 15) {
    nav.classList.add('navbar-light', 'bg-costume', 'shadow');
    nav.classList.remove('navbar-dark');
    document.documentElement.style.setProperty('--theme-color', defaultThemeColor);
    metaThemeColor.setAttribute('content', defaultThemeColor);
  } else {
    nav.classList.remove('navbar-light', 'bg-costume', 'shadow');
    nav.classList.add('navbar-dark');
    document.documentElement.style.setProperty('--theme-color', '#FFFFFF'); // Ganti dengan warna default yang diinginkan
    metaThemeColor.setAttribute('content', '#FFFFFF'); // Ganti dengan warna default yang diinginkan
  }
});
