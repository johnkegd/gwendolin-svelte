<script>
import SideNav from './SideNav.svelte';

</script>

  <!-- Navbar and Header -->
  <nav class="nav-extended">
    <div class="nav-background">
      <div class="pattern active" style="background-image: url('Assets/images/stars.svg');background-size:20%"></div>
    </div>
    <div class="nav-wrapper container grey-text text-lighten-3">
      <a href="index.html" class="brand-logo"><img src="Assets/images/logo-2.svg" with="200" height="300" alt="gwendolin logo"></a>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li class="active"><a href="#">Gallery</a></li>
        <li><a href="index-dark.html">Dark Theme</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="docs.html">Docs</a></li>
        <li><a class='dropdown-trigger' href='#' data-target='feature-dropdown'>Features<i
              class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
      <!-- Dropdown Structure -->
      <ul id='feature-dropdown' class='dropdown-content'>
        <li><a href="full-header.html">Fullscreen Header</a></li>
        <li><a href="horizontal.html">Horizontal Style</a></li>
        <li><a href="no-image.html">No Image Expand</a></li>
      </ul>

      <div class="nav-header center yellow-text text-lighten-4">
        <h1>I MAKE THINGS</h1>
        <div class="tagline">Gallery</div>
      </div>
    </div>

    <!-- Fixed Masonry Filters -->
    <div class="categories-wrapper yellow lighten-4">
      <div class="categories-container">
        <ul class="categories container">
          <li class="active"><a href="#all">All</a></li>
          <li><a href="#polygon">Polygon</a></li>
          <li><a href="#bigbang">Big Bang</a></li>
          <li><a href="#sacred">Sacred Geometry</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <SideNav/>
