<script>
import SideNav from './SideNav.svelte';

  document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelectorAll('.dropdown-button');
    var sidenav = document.querySelectorAll('.side-nav');
    var dropdownInit = M.Dropdown.init(dropdown, null);
    var sidenavInit = M.Sidenav.init(sidenav,null);
  });
</script>

<nav class="nav-extended">
    <div class="nav-background">
      <div class="ea k" style="background-image: url('//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/icon-seamless.png?v=16169594983224640439');"></div>
    </div>
    <div class="nav-wrapper db">
      <a href="/pages/demo" class="brand-logo"><i class="material-icons">camera</i>Gwendolin</a>
      <a href="#" data-target="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="bt hide-on-med-and-down">
        <li class="k"><a href="/pages/demo">Gallery</a></li>
        <li><a href="/pages/dark-theme">Dark Theme</a></li>
        <li><a href="/pages/blog">Blog</a></li>
        <li><a href="/pages/docs">Docs</a></li>
        <li class="dropdownList"><a class="dropdown-button" href="#" data-target="feature-dropdown" data-beloworigin="true" data-constrainwidth="false">Features<i class="material-icons bt">arrow_drop_down</i></a>
        <ul id="feature-dropdown" class="dropdown-content">
        <li><a href="/pages/full-header">Fullscreen Header</a></li>
        <li><a href="/pages/horizontal">Horizontal Style</a></li>
        <li><a href="/pages/no-image">No Image Expand</a></li>
      </ul></li>
      </ul>
      <!-- Dropdown Structure -->
      

      <div class="nav-header de">
        <h1>I MAKE THINGS</h1>
        <div class="ge">Gallery</div>
      </div>
    </div>

    <!-- Fixed Masonry Filters -->
    <div class="categories-wrapper af lighten-1">
      <div class="categories-container pin-top" style="top: 0px;">
        <ul class="categories db">
          <li class="k"><a href="#all">All</a></li>
          <li><a href="#polygon">Polygon</a></li>
          <li><a href="#bigbang">Big Bang</a></li>
          <li><a href="#sacred">Sacred Geometry</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <SideNav/>
