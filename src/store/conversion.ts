 import { defineStore } from 'pinia';
 import { useStorage } from "@vueuse/core";

 export const useConversionStore = defineStore('conversion', () => {
     const activeType = useStorage("conversion.active_type", "length");
     const fromUnit = useStorage("conversion.from_unit", "length");
     const toUnit = useStorage("conversion.to_unit", "length");
     const fromValue = useStorage("conversion.from_value", 0);
     const toValue = useStorage("conversion.to_value", 0);
     return {
         activeType,
         fromUnit,
         toUnit,
         fromValue,
         toValue
     };
 });