// navbar di index
const navbarContent = `
<nav class="navbar-index fixed-top navbar-dark p-md-3 p-lg-1 rgb(255,255,255)">
      <div class="container-fluid">
        <span class="navbar-brand me-auto px-2 px-md-3 px-lg-3 px-xl-3">Warthadev
          <span class="img-lencana"></span>
        </span>

        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">

          <span class="toggler-icon top-bar"></span>
          <span class="toggler-icon middle-bar"></span>
          <span class="toggler-icon bottom-bar"></span>

        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto px-2 px-lg-2 px-xl-2">

            <li class="nav-item id="nav-document"">
              <a class="nav-link" aria-current="page" href="../../index.html">Home</a>
            </li>
            <li class="nav-item" id="nav-document">
              <a class="nav-link" href="https://linktr.ee/hewartsu">Donation</a>
            </li>
            <li class="nav-item id="nav-document"">
              <a class="nav-link" href="../../html/showcase/showcase-3.html">Document</a>
            </li>

          </ul>

          <div class="ico navbar-nav ms-auto d-flex flex-row px-2 px-lg-2 px-xl-2">

            <a class="nav-link active" href="https://youtube.com/c/warthasensei">
              <i class="bi bi-youtube "></i>
            </a>
            <a class="nav-link active" href="https://twitter.com/banu485">
              <i class="bi bi-twitter "></i>
            </a>
            <a class="nav-link active" href="https://instagram.com/hewartsu">
              <i class="bi bi-instagram"></i>
            </a>
            <a class="nav-link active" href="https://open.spotify.com/artist/7imN5UpqCoekwIGXiOgLh4?si">
              <i class="bi bi-spotify"></i>
            </a>
            <a class="nav-link active" href="https://github.com/warthadev">
              <i class="bi bi-github"></i>
            </a>

          </div>
        </div>
      </div>
    </nav>
`;

document.getElementById("navbar-ini").innerHTML = navbarContent;
