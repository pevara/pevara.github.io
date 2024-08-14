<script lang="ts" setup>
import {ref} from "vue";
import {useAppStore} from "@/store/app";
import {useHead} from '@unhead/vue';
import {useI18n} from 'vue-i18n';
import {MDCRipple} from '@material/ripple';
import {onMounted} from 'vue';

const {t} = useI18n();

const store = useAppStore();
const menuVisible = ref(false);
const year = new Date().getFullYear();

useHead({
	title: "tools for builders",
	htmlAttrs: {
		"data-bs-theme": store.theme
	}
});


onMounted(() => {
	const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'));
	rippleSurface.map(s => {
		return new MDCRipple(s);
	});
});
</script>


<template>
	<header class="navbar navbar-expand-xl bg-primary">
		<div class="container-fluid">
			<RouterLink to="/" class="navbar-brand d-flex align-items-center">
				<span class="icon">calculate</span> {{ t("title") }}
			</RouterLink>
			<RouterLink exactActiveClass="btn-secondary" to="/settings" class="btn position-relative" type="button">
				&nbsp;&nbsp;&nbsp;
				<span class="icon">settings</span>
			</RouterLink>

		</div>
	</header>
	<div class="p-1 flex-grow-1">

		<router-view/>

	</div>
	<footer class="text-center pb-2">
		<span class="copy me-3">&copy; {{ year }}</span>
		<RouterLink exactActiveClass="disabled" to="/about" class="btn btn-link">{{ t("about") }}</RouterLink>
		<RouterLink exactActiveClass="disabled" to="/privacy" class="btn btn-link">{{ t("privacy") }}</RouterLink>
	</footer>

</template>


<style lang="scss">
$primary: #086f91;
$secondary: #72a7b1;
$enable-shadows: true;
$enable-gradients: false;
$enable-grid-classes: false;
@import "~@materialstyle/materialstyle/scss/materialstyle";

body {
	min-height: 100vh;
}
#app {
	min-height: 100vh;
	background: rgba(142, 189, 205, .03);
}

.icon {
	font-family: 'Material Symbols Outlined';
	font-weight: normal;
	font-style: normal;
	font-size: 24px;
	display: inline-block;
	line-height: 1;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	direction: ltr;
}
</style>

<style scoped>

.navbar-brand .icon {
	line-height: 0;
	font-size: 38px;
	margin-right: 10px;
}

.btn .icon {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -16px;
	margin-top: -16px;
	font-size: 32px;
}

header {
	margin-left: calc(var(--bs-gutter-x) * -.5);
	margin-right: calc(var(--bs-gutter-x) * -.5);
}

.copy {
	position: relative;
    top: 3px;
}
</style>

<i18n>
{
	"en": {
		"title": "Tools for Builders"
	},
	"nl": {
		"title": "Tools voor Bouwers"
	}
}
</i18n>