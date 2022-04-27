<template>
	<TopNav activePage="{{$router.path }}" />
	<form class="mx-3 mt-5 mx-sm-auto p-sm-5 p-4">
		<h2>Student login</h2>
		<div class="mb-3">
			<label for="student-id" class="form-label">Student ID number</label>
			<input type="text" class="form-control" id="student-id" />
		</div>
		<div class="mb-3">
			<label for="student-password" class="form-label">Password</label>
			<div class="custom-input-password form-control flex-row d-flex p-0">
				<input type="password" class="form-control border-0" id="student-password" />
				<button type="button" id="toggle-password" class="input-group-text border-0" data-toggle="password">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
						<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
						<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill d-none" viewBox="0 0 16 16">
						<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
						<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
					</svg>
				</button>
			</div>
		</div>
		<button type="submit" class="academ-btn btn">Logins</button>
	</form>
	<Footer />
</template>

<script setup>
import TopNav from "./TopNav.vue";
import Footer from "./Footer.vue";
import "./../assets/index.css";
import $ from "jquery";

$(document).ready(function () {
	$("#toggle-password").on("click", function () {
		$(this).children().toggleClass("d-none");
		const type = "password" == this.dataset.toggle ? "text" : "password";
		$(`.custom-input-password>input[type=${this.dataset.toggle}]`).attr("type", type);
		this.dataset.toggle = type;
	});
});
</script>

<style>
form {
	box-sizing: border-box;
	color: #1f096a;
	border: 0px solid #fff;
	box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 75%);
	-webkit-box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 75%);
	-moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
}

div.custom-input-password > button#toggle-password {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	background-color: transparent;
}

@media only screen and (min-width: 576px) {
	form {
		width: 456px;
	}
}
</style>
