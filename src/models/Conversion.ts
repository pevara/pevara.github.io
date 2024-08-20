import {
    mdiRuler,
    mdiRulerSquare,
    mdiCubeOutline,
    mdiWeight,
    mdiClockTimeEightOutline,
} from '@quasar/extras/mdi-v7';
import { TranslateItemsProperty } from './Translation';

export type Converter = (base: number) => number;
type ConversionUnitBase = {
    id: string;
    label: string;
    short: string;
    active?: 'from' | 'to' | false;
};
export type ConversionUnitWithFactor = ConversionUnitBase & {
    factor: number;
};
export type ConversionUnitWithConverters = ConversionUnitBase & {
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
    icon: string;
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
        if (!id || !categories) {
            return undefined;
        }
        return categories.find((category) => category.id === id);
    },
    selectUnit: (
        category: ConversionCategory,
        id: string
    ): ConversionUnit | undefined => {
        if (!category || !id) {
            return undefined;
        }
        return category.units.find((unit) => unit.id === id);
    },
    selectDefaultUnit: (
        category: ConversionCategory
    ): ConversionUnit | undefined => {
        if (!category) {
            return undefined;
        }
        return ConversionService.selectUnit(category, category.default);
    },
    selectNonDefaultUnit: (
        category: ConversionCategory
    ): ConversionUnit | undefined => {
        if (!category) {
            return undefined;
        }
        return category.units.find((unit) => unit.id !== category.default);
    },
    activateDefaultUnits: (category?: ConversionCategory) => {
        if (!category) {
            return category;
        }
        const curFrom = category.units.find((unit) => unit.active === 'from');
        const curTo = category.units.find((unit) => unit.active === 'to');
        if (curFrom && curTo) {
            return category;
        }
        if (curTo && curTo.id === category.default) {
            category.units.find(
                (unit) => unit.id !== category.default
            )!.active = 'from';
            return category;
        }
        let toSet = !!curTo;
        let fromSet = !!curFrom;
        for (const unit of category.units) {
            if (unit.id === category.default) {
                unit.active = 'from';
                fromSet = true;
            } else if (!toSet) {
                unit.active = 'to';
                toSet = true;
            }
            if (fromSet && toSet) {
                break;
            }
        }
        return category;
    },
    filterActiveUnits: (units: ConversionUnit[]) => {
        const from = units.find((unit) => unit.active === 'from');
        const to = units.find((unit) => unit.active === 'to');
        return { from, to };
    },
};

export const ConversionCategories = (): ConversionCategory[] =>
    TranslateItemsProperty([
        {
            id: 'length',
            label: 'conversion__category_length',
            default: 'mm',
            icon: mdiRuler,
            units: TranslateItemsProperty(
                [
                    {
                        id: 'mm',
                        label: 'conversion__length__unit_mm__full',
                        short: 'conversion__length__unit_mm__short',
                        factor: 1,
                    },
                    {
                        id: 'cm',
                        label: 'conversion__length__unit_cm__full',
                        short: 'conversion__length__unit_cm__short',
                        factor: 10,
                    },
                    {
                        id: 'm',
                        label: 'conversion__length__unit_m__full',
                        short: 'conversion__length__unit_m__short',
                        factor: 1000,
                    },
                    {
                        id: 'km',
                        label: 'conversion__length__unit_km__full',
                        short: 'conversion__length__unit_km__short',
                        factor: 1000000,
                    },
                    {
                        id: 'in',
                        label: 'conversion__length__unit_in__full',
                        short: 'conversion__length__unit_in__short',
                        factor: 25.4,
                    },
                    // Add other length units as needed...
                ],
                ['label', 'short']
            ),
        },
        {
            id: 'area',
            label: 'conversion__category_area',
            default: 'm2',
            icon: mdiRulerSquare,
            units: TranslateItemsProperty(
                [
                    {
                        id: 'mm2',
                        label: 'conversion__surface__unit_mm2__full',
                        short: 'conversion__surface__unit_mm2__short',
                        factor: 1,
                    },
                    {
                        id: 'cm2',
                        label: 'conversion__surface__unit_cm2__full',
                        short: 'conversion__surface__unit_cm2__short',
                        factor: 100,
                    },
                    {
                        id: 'm2',
                        label: 'conversion__surface__unit_m2__full',
                        short: 'conversion__surface__unit_m2__short',
                        factor: 1000000,
                    },
                    {
                        id: 'km2',
                        label: 'conversion__surface__unit_km2__full',
                        short: 'conversion__surface__unit_km2__short',
                        factor: 1000000000000,
                    },
                    // Add other area units as needed...
                ],
                ['label', 'short']
            ),
        },
        {
            id: 'volume',
            label: 'conversion__category_volume',
            default: 'l',
            icon: mdiCubeOutline,
            units: TranslateItemsProperty(
                [
                    {
                        id: 'mm3',
                        label: 'conversion__volume__unit_mm3__full',
                        short: 'conversion__volume__unit_mm3__short',
                        factor: 1,
                    },
                    {
                        id: 'cm3',
                        label: 'conversion__volume__unit_cm3__full',
                        short: 'conversion__volume__unit_cm3__short',
                        factor: 1000,
                    },
                    {
                        id: 'l',
                        label: 'conversion__volume__unit_l__full',
                        short: 'conversion__volume__unit_l__short',
                        factor: 1000000,
                    },
                    {
                        id: 'm3',
                        label: 'conversion__volume__unit_m3__full',
                        short: 'conversion__volume__unit_m3__short',
                        factor: 1000000000,
                    },
                    // Add other volume units as needed...
                ],
                ['label', 'short']
            ),
        },
        {
            id: 'mass',
            label: 'conversion__category_mass',
            default: 'kg',
            icon: mdiWeight,
            units: TranslateItemsProperty(
                [
                    {
                        id: 'mg',
                        label: 'conversion__mass__unit_mg__full',
                        short: 'conversion__mass__unit_mg__short',
                        factor: 1,
                    },
                    {
                        id: 'g',
                        label: 'conversion__mass__unit_g__full',
                        short: 'conversion__mass__unit_g__short',
                        factor: 1000,
                    },
                    {
                        id: 'kg',
                        label: 'conversion__mass__unit_kg__full',
                        short: 'conversion__mass__unit_kg__short',
                        factor: 1000000,
                    },
                    {
                        id: 't',
                        label: 'conversion__mass__unit_t__full',
                        short: 'conversion__mass__unit_t__short',
                        factor: 1000000000,
                    },
                    // Add other mass units as needed...
                ],
                ['label', 'short']
            ),
        },
        {
            id: 'time',
            label: 'conversion__category_time',
            default: 's',
            icon: mdiClockTimeEightOutline,
            units: TranslateItemsProperty(
                [
                    {
                        id: 's',
                        label: 'conversion__time__unit_s__full',
                        short: 'conversion__time__unit_s__short',
                        factor: 1,
                    },
                    {
                        id: 'min',
                        label: 'conversion__time__unit_min__full',
                        short: 'conversion__time__unit_min__short',
                        factor: 60,
                    },
                    {
                        id: 'h',
                        label: 'conversion__time__unit_h__full',
                        short: 'conversion__time__unit_h__short',
                        factor: 3600,
                    },
                    {
                        id: 'd',
                        label: 'conversion__time__unit_d__full',
                        short: 'conversion__time__unit_d__short',
                        factor: 86400,
                    },
                    // Add other time units as needed...
                ],
                ['label', 'short']
            ),
        },
        // Add other categories as needed...
    ]);
