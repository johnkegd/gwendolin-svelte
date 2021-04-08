<script>
	import logo from 'images/logo-2.svg';
	import headBackground from 'images/stars.svg';
	export let segment;
</script>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	.categories-wrapper a {
		color:black;
	}
</style>


<!-- Navbar and Header -->
<nav class="nav-extended">
	<div class="nav-background">
		<div
			class="pattern active"
			style="background-image:url({headBackground})"
		/>
	</div>
	<div class="nav-wrapper container grey-text text-lighten-3">
		<a href="." class="brand-logo">
			<img
				src={logo}
				with="200"
				height="300"
				alt="gwendolin-logo"/>
		</a>
		<a href="none" data-target="nav-mobile" class="sidenav-trigger">
			<i class="material-icons">menu</i>
		</a>
		<ul class="right hide-on-med-and-down">
			<li class:active={segment === "gallery"}><a rel=prefetch href="gallery">Gallery</a></li>
			<li class:active={segment === "darkTheme"}><a href="#none">Dark Theme</a></li>
			<li class:active={segment === "about"}><a href="about">About</a></li>
			<li class:active={segment === "docs"}><a href="docs">Docs</a></li>
			<li class:active={segment === "blog"}><a rel="prefetch" href="blog">Blog</a></li>
			<li>
				<a class="dropdown-trigger" href data-target="feature-dropdown">
					Features
					<i class="material-icons right">arrow_drop_down</i>
				</a>
			</li>
		</ul>
		<!-- Dropdown Structure -->
		<ul id="feature-dropdown" class="dropdown-content">
			<li><a href="full-header.html">Fullscreen Header</a></li>
			<li><a href="horizontal.html">Horizontal Style</a></li>
			<li><a href="no-image.html">No Image Expand</a></li>
		</ul>

		<div class="nav-header center yellow-text text-lighten-4">
			<h1>I MAKE THINGS</h1>
			<div class="tagline">{segment === undefined ? "HOME": segment.toUpperCase()}</div>
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
<ul class="sidenav" id="nav-mobile">
	<li class="active"><a href="."><img src="{logo}" with="40" height="40" alt="gwendolin logo"></a></li>
	<li><a href><i class="material-icons">brightness_3</i>Dark Theme</a></li>
	<li><a href="blog"><i class="material-icons">edit</i>Blog</a></li>
	<li><a href="docs"><i class="material-icons">school</i>Docs</a></li>
	<li><a href="."><i class="material-icons">fullscreen</i>Fullscreen Header</a></li>
	<li><a href="."><i class="material-icons">swap_horiz</i>Horizontal Style</a></li>
	<li><a href="."><i class="material-icons">texture</i>No Image Expand</a></li>
  </ul>
