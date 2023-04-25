// Function untuk mengatur cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function untuk mendapatkan nilai cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function untuk menampilkan pop-up cookie consent
function showCookieConsent() {
    var cookieConsent = document.querySelector('.cookie-consent');
    if (!getCookie('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }
    var cookieConsentBtn = document.querySelector('#cookie-consent-btn');
    cookieConsentBtn.addEventListener('click', function () {
        setCookie('cookieConsent', true, 365);
        cookieConsent.style.display = 'none';
    });
}

// Panggil function showCookieConsent saat halaman website dimuat
document.addEventListener('DOMContentLoaded', function () {
    showCookieConsent();
});