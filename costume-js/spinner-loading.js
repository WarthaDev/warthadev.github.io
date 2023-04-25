window.addEventListener('load', function () {
    // mengambil elemen spinner
    const spinner = document.getElementById('my-spinner');
    // mengambil elemen konten
    const content = document.getElementById('my-content');
    // menghapus kelas "d-none" dari konten sehingga konten bisa ditampilkan
    content.classList.remove('d-none');
    // menambahkan kelas "d-none" ke spinner sehingga spinner bisa disembunyikan
    spinner.classList.add('d-none');
});