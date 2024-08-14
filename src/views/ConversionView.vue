<template>
	<div class="pt-2">
		<h1 class="text-center">{{ t("conversion_title") }}</h1>
		<div class=" mt-3 bg-primary-subtle p-3 conversion-type-container form-floating-with-icon position-relative">
			<div class="form-floating form-floating-outlined">
				<select class="form-select" v-model="store.activeType">
					<option v-for="type in conversionTypes" :key="type.id" :value="type.id">{{ type.id }}</option>
				</select>
				<label>Conversion Type</label>
			</div>
			<div class="prepend">
				<i class="icon">{{ activeType.icon }}</i>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {onMounted, reactive, computed} from "vue";
import {useI18n} from "vue-i18n";
import {MDCRipple} from "@material/ripple";
import {ConversionType} from "@/interfaces/conversion";
import {SelectField} from '@materialstyle/materialstyle';
import { useConversionStore } from "@/store/conversion";


const {t} = useI18n();

const store = useConversionStore();

const conversionTypes = reactive([
	{
		id: "length",
		icon: "straighten",
		units: [
			{
				id: "milimetre",
				convertToDefault: (source) => source,
				convertFromDefault: (source) => source
			}, {
			id: "inch",
			convertToDefault: (source) => source * 25.4,
			convertFromDefault: (source) => source / 25.4
		}, {
			id: "foot",
			convertToDefault: (source) => source * 304.8,
			convertFromDefault: (source) => source / 304.8
		}, {
			id: "nautical mile",
			convertToDefault: (source) => source * 1852000,
			convertFromDefault: (source) => source / 1852000
		}, {
			id: "yard",
			convertToDefault: (source) => source * 914.4,
			convertFromDefault: (source) => source / 914.4
		}, {
			id: "mile",
			convertToDefault: (source) => source * 1609000,
			convertFromDefault: (source) => source / 1609000
		}, {
			id: "centimetre",
			convertToDefault: (source) => source * 10,
			convertFromDefault: (source) => source / 10
		}, {
			id: "metre",
			convertToDefault: (source) => source * 100,
			convertFromDefault: (source) => source / 100
		}, {
			id: "kilometre",
			convertToDefault: (source) => source * 1000,
			convertFromDefault: (source) => source / 1000
		}
		],
		default: "mm"
	}, {
		id: "surface",
		icon: "rectangle",
		units: [],
		default: "square milimetre"
	}
]);

const activeType = computed( () => {
	for (let type of conversionTypes) {
		if (type.id == store.activeType) {
			return type;
		}
	}
	return null;
} );

onMounted(() => {
	const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'));
	rippleSurface.map(s => {
		return new MDCRipple(s);
	});
	const selectFields = document.querySelectorAll('.form-select')
	for (const [, value] of Object.entries(selectFields)) {
		const selectFieldInstance = SelectField.getOrCreateInstance(value)
		selectFieldInstance.rebuild()
	}
});
</script>

<style lang="scss">
.prepend .icon {
	top: 50%;
	font-size: 30px;
	margin-top: -15px;
}
</style>

<i18n>
{
	"en": {
		"conversion_title": "Unit Conversion",
		"input_value": "Input Value",
		"conversion_type": "Conversion Type",
		"meters_to_yards": "Meters to Yards",
		"kilograms_to_pounds": "Kilograms to Pounds",
		"result": "Result",
		"convert_button": "Convert"
	},
	"nl": {
		"conversion_title": "Eenheid Conversie",
		"input_value": "Invoerwaarde",
		"conversion_type": "Conversietype",
		"meters_to_yards": "Meters naar Yards",
		"kilograms_to_pounds": "Kilogram naar Pond",
		"result": "Resultaat",
		"convert_button": "Omrekenen"
	}
}
</i18n>