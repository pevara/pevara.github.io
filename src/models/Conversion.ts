export type Converter = (base: number) => number;
export type ConversionUnitWithFactor = {
    id: string;
    label: string;
    factor: number;
};
export type ConversionUnitWithConverters = {
    id: string;
    label: string;
    convertToBase: Converter;
    convertFromBase: Converter;
};
export type ConversionUnit =
    | ConversionUnitWithFactor
    | ConversionUnitWithConverters;

export type ConversionCategory = {
    id: string;
    label: string;
    default: string;
    units: ConversionUnit[];
};

export const ConversionService = {
    convert: (
        from: ConversionUnit | undefined,
        to: ConversionUnit | undefined,
        value: number = 1
    ): number => {
        console.log('convert', from, to, value);
        if (!from || !to) {
            return value;
        }
        const fromAsBase =
            'factor' in from ? value * from.factor : from.convertToBase(value);
        return 'factor' in to
            ? fromAsBase / to.factor
            : to.convertFromBase(fromAsBase);
    },
    excludeUnit: (
        units: ConversionUnit[] | undefined,
        id: string | undefined
    ): ConversionUnit[] => {
        if (!units) {
            return [];
        }
        if (!id) {
            return units;
        }
        return units.filter((unit) => unit.id !== id);
    },
    selectCategory: (categories: ConversionCategory[], id: string) => {
        return categories.find((category) => category.id === id);
    },
    selectUnit: (
        category: ConversionCategory | undefined,
        id: string | undefined
    ) => {
        if (!category || !id) {
            return undefined;
        }
        return category.units.find((unit) => unit.id === id);
    },
};

export const ConversionCategories: ConversionCategory[] = [
    {
        id: 'length',
        label: 'conversion__category_length',
        default: 'mm',
        units: [
            {
                id: 'mm',
                label: 'conversion__unit_mm',
                factor: 1,
            },
            {
                id: 'cm',
                label: 'conversion__unit_cm',
                factor: 10,
            },
            {
                id: 'm',
                label: 'conversion__unit_m',
                factor: 1000,
            },
            {
                id: 'km',
                label: 'conversion__unit_km',
                factor: 1000000,
            },
            {
                id: 'in',
                label: 'conversion__unit_in',
                factor: 25.4,
            },
            {
                id: 'ft',
                label: 'conversion__unit_ft',
                factor: 304.8,
            },
            {
                id: 'yd',
                label: 'conversion__unit_yd',
                factor: 914.4,
            },
            {
                id: 'mi',
                label: 'conversion__unit_mi',
                factor: 1609344,
            },
        ],
    },
    {
        id: 'area',
        label: 'conversion__category_area',
        default: 'mm2',
        units: [
            {
                id: 'mm2',
                label: 'conversion__unit_mm2',
                factor: 1,
            },
            {
                id: 'cm2',
                label: 'conversion__unit_cm2',
                factor: 100,
            },
            {
                id: 'm2',
                label: 'conversion__unit_m2',
                factor: 1000000,
            },
            {
                id: 'km2',
                label: 'conversion__unit_km2',
                factor: 1000000000000,
            },
            {
                id: 'in2',
                label: 'conversion__unit_in2',
                factor: 645.16,
            },
            {
                id: 'ft2',
                label: 'conversion__unit_ft2',
                factor: 92903.04,
            },
            {
                id: 'yd2',
                label: 'conversion__unit_yd2',
                factor: 836127.36,
            },
            {
                id: 'mi2',
                label: 'conversion__unit_mi2',
                factor: 2589988110336,
            },
        ],
    },
    {
        id: 'volume',
        label: 'conversion__category_volume',
        default: 'm3',
        units: [
            {
                id: 'mm3',
                label: 'conversion__unit_mm3',
                factor: 1,
            },
            {
                id: 'cm3',
                label: 'conversion__unit_cm3',
                factor: 1000,
            },
            {
                id: 'm3',
                label: 'conversion__unit_m3',
                factor: 1000000000,
            },
            {
                id: 'km3',
                label: 'conversion__unit_km3',
                factor: 1000000000000000000,
            },
            {
                id: 'in3',
                label: 'conversion__unit_in3',
                factor: 16387.064,
            },
            {
                id: 'ft3',
                label: 'conversion__unit_ft3',
                factor: 28316846.592,
            },
            {
                id: 'yd3',
                label: 'conversion__unit_yd3',
                factor: 764554857.984,
            },
        ],
    },
];
