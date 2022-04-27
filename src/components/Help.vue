<script setup>
import "./../assets/index.css";
import TopNav from "./TopNav.vue";
import Footer from "./Footer.vue";
</script>

<template>
	<TopNav activePage="{{$route.path}}" />
	<div class="content d-block my-5 px-5 px-sm-0">
		<div class="d-flex mx-lg-5 flex-column flex-lg-row gap-3">
			<div class="d-flex flex-column m-auto">
				<h2 class="bigtext">LNU Pre-Online Enrollment Helpline</h2>
				<div class="d-flex m-auto gap-1 flex-column flex-lg-row">
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSfKDhyyzWVRIH_Upe6wNE8EKDfFcEqjdsIc3Ioel430z8Juxw/viewform" class="academ-btn btn btn-lg">Problem Encountered</a>
					<a href="https://sites.google.com/lnu.edu.ph/poes/home" class="academ-btn btn btn-lg">Problem Encountered Status Monitoring</a>
				</div>
			</div>
			<div class="academ">
				<div>
					<img src="./../assets/academ.png" alt="academ.png" class="text-center" />
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
export default {};
</script>

<style></style>
