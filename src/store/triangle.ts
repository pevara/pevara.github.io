import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";


export const useTriangleStore = defineStore('triangle', () => {
	const dimensions = useStorage('triangle.dimensions', {
		A: 400,
		B: 300,
		C: 500,
		W: 400,
		H: 300,
		S: 60000,
		ab: 90,
		ac: 40,
		bc: 50
	});
    
    return {dimensions};
});