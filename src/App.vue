<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Topbar from "./components/landing-page/Topbar.vue";
import Bottombar from "./components/landing-page/Bottombar.vue";
</script>

<style>
@import "./assets/base.css";
</style>

<template>
	<div id="app" class="d-flex vh-100">
		<Topbar activePage="home" />
		<div id="router-view" class="container m-auto">
			<router-view></router-view>
		</div>
		<Bottombar />
	</div>
</template>
