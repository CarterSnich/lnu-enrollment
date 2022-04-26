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

<template>
	<nav class="navbar navbar-expand navbar-dark p-0 d-md-block d-none px-5">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="./../../assets/logolnu.png" alt="lnulogo" width="64" />
			</a>
			<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				<div class="d-flex">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<router-link to="/" class="nav-link" :class="{ active: activePage == 'home' }" href="#">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/contact-us" class="nav-link" :class="{ active: activePage == 'contact-us' }" href="#">Contact us</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/help" class="nav-link" :class="{ active: activePage == 'help' }" href="#">Help</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/login" class="nav-link" :class="{ active: activePage == 'login' }"> Login </router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>

	<nav class="navbar navbar-dark p-0 d-md-none">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="./../../assets/logolnu.png" alt="lnulogo" width="64" />
			</a>

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/" class="nav-link" :class="{ active: activePage == 'home' }" href="#">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/contact-us" class="nav-link" :class="{ active: activePage == 'contact-us' }" href="#">Contact us</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/help" class="nav-link" :class="{ active: activePage == 'help' }" href="#">Help</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/login" class="nav-link" :class="{ active: activePage == 'login' }"> Login </router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style setup>
nav {
	background-color: #060084;
}
</style>
