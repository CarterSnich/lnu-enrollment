<script setup>
import Topbar from "./components/landing-page/Topbar.vue";
import Bottombar from "./components/landing-page/Bottombar.vue";
</script>

<style>
div.links > a {
	background-color: #be9a09;
}

h1.big-text {
	font-size: 62px;
}
</style>

<template>
	<Topbar activePage="home" />
	<div class="body container mb-5">
		<div class="d-flex mx-4 my-5 m-md-auto flex-lg-row flex-column gap-3">
			<div class="align-self-center text-center">
				<h1 class="big-text mb-5">2nd Sem. 2021 - 2022 Online Enrollment</h1>
				<div class="links d-flex gap-1 justify-content-center flex-lg-row flex-column">
					<a href="" class="btn btn-lg">Shifting of Program</a>
					<a href="" class="btn btn-lg">UniFAST-TES Application Form</a>
					<a href="" class="btn btn-lg">User Evaluation</a>
				</div>
			</div>
			<div class="d-flex">
				<img class="img-fluid" src="./assets/academ.png"/>
			</div>
		</div>
	</div>
	<Bottombar />
</template>
