<template>
	<nav class="navbar navbar-expand-lg navbar-dark py-0 px-lg-5 sticky-top">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="./../assets/logolnu.png" alt="logolnu.png" />
			</a>

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/" class="nav-link">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/contact-us" class="nav-link">Contact Us</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/help" class="nav-link">Help</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/login" class="nav-link">Login</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	props: {
		activePage: {
			type: String,
			required: true,
		},
	},
};
</script>

<style>
nav {
	background-color: #060084;
}

a.navbar-brand > img {
	height: 3.5rem;
}

li.nav-item > a.nav-link {
	color: #d4b40e !important;
	font-weight: bold;
	width: fit-content !important;
}

li.nav-item > a.nav-link:hover {
	color: white !important;
}

li.nav-item > a.nav-link.router-link-active {
	border-bottom: 1px solid #be9a09;
	transition: 500ms ease-in-out;
}
</style>
