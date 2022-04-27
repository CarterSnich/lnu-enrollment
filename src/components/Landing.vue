<script setup>
import TopNav from "./TopNav.vue";
import Footer from "./Footer.vue";
</script>

<template>
	<TopNav activePage="{{$route.path}}" />
	<div class="content d-block my-5 px-5 px-sm-0">
		<div class="d-flex mx-lg-5 flex-column flex-lg-row gap-3">
			<div class="d-flex flex-column m-auto">
				<h2 class="bigtext">2nd Sem. 2021 - 2022 Online Enrollment</h2>
				<div class="d-flex m-auto gap-1 flex-column flex-lg-row">
					<router-link to="/" class="academ-btn btn btn-lg" type="button">Shifting of Program</router-link>
					<router-link to="/" class="academ-btn btn btn-lg" type="button">UniFAST-TES Application Form</router-link>
					<router-link to="/" class="academ-btn btn btn-lg" type="button">User Evaluation</router-link>
				</div>
			</div>
			<div class="academ">
				<img src="./../assets/academ.png" alt="academ.png" class="text-center" />
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
export default {};
</script>

<style>
#app {
	display: flex;
	flex-flow: column;
	height: 100vh;
}

#content {
	margin-bottom: 3.25rem;
}

h2.bigtext {
	color: #be9a09;
	font-size: clamp(2.5rem, 5vw, 4.25rem);
	text-align: center;
	margin-inline: 1.25rem;
	margin-bottom: 3.25rem;
}

div.academ > img {
	width: min(30.25rem, 100%);
	height: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

a.academ-btn {
	color: white !important;
	background-color: #be9a09 !important;
}
a.academ-btn:hover {
	color: inherit !important;
	box-shadow: inset 0px 0px 0.25rem 0px #00000055;
}

a.academ-btn:active {
	box-shadow: 0 0 0 0.25rem #be9a0944 !important;
}

a.academ-btn:focus {
	box-shadow: 0 0 0 0.25rem #be9a0944 !important;
}
</style>
