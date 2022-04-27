<template>
	<TopNav activePage="{{$route.path}}" />
	<div class="content d-block my-5 px-5 px-sm-0">
		<div class="d-flex mx-lg-5 flex-column flex-lg-row gap-3">
			<div class="d-flex flex-column m-auto">
				<h2 class="bigtext">2nd Sem. 2021 - 2022 Online Enrollment</h2>
				<div class="d-flex m-auto gap-1 flex-column flex-lg-row">
					<router-link to="/" class="academ-btn unavailable-btn btn btn-lg">Shifting of Program</router-link>
					<router-link to="/" class="academ-btn unavailable-btn btn btn-lg">UniFAST-TES Application Form</router-link>
					<router-link to="/" class="academ-btn unavailable-btn btn btn-lg">User Evaluation</router-link>
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
<script setup>
import "./../assets/index.css";
import TopNav from "./TopNav.vue";
import Footer from "./Footer.vue";

import $ from "jquery";
$(document).ready(function () {
	$(".unavailable-btn").on("click", function (e) {
		e.preventDefault();
		alert("This service is not available at the moment.");
	});
});
</script>

<style></style>
