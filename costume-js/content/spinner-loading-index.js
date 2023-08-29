// spinner-loadning-content-index.js

const spinnerContentIndex = `
<!-- Spinner -->
  <div id="my-spinner" class="bg-dasarDark d-flex align-items-center justify-content-center vh-100">
    <div class="row">
      <div class="col-12">
        <div class="d-flex">
          <p class="align-self-start m-2 py-2">Menuju Halaman Utama. Memuat Jaringan.</p>
        </div>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-white" role="status">
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Pop-up Cookie -->
  <div class="fixed-bottom bg-light text-black m-2 rounded-3">
    <div class="container-fluid">
      <div class="row">
        <!-- Pop-up Cookie JS -->
        <div class="cookie-consent">
          <div class="py-3 px-2">
            <p>MOD Minecraft Java Edition sekarang berada dihalaman Document. Jika tidak muncul refresh kembali.
            </p>
            <div class="text-end">
              <button class="btn btn-dark" id="cookie-consent-btn">Mengerti</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

document.getElementById("spinner-cokkie").innerHTML = spinnerContentIndex;
