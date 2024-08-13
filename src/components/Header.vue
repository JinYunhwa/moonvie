<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.png" alt="Moonvie Logo" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">홈</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">월/분기별</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">기간별</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">장르별</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">OTT흥행</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">극장과 OTT 비교</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'MoonvieHeader'
  };
  </script>
  