fatch('html/attribute/navbar.html')
.then(respose => respose.text())
.then(data => {
    document.querySelector('#navbar-placeholder').innerHTML = data;
    //jalankan navbar-root.js setelah mencari konten
    const script = document.createElement('script');
    script.src = 'costume-js/navbar-index.js';
    document.body.appendChild(script);
})
