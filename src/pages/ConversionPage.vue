<template>
    <q-page padding class="column items-center">
        <h1 class="text-h5 full-width">{{ $t('conversion__page_title') }}</h1>

        <q-select
            :label="$t('conversion__category_label')"
            v-model="selectedCategoryId"
            :options="categoryOptions"
            class="full-width"
        ></q-select>

        <q-separator spaced class="full-width" />

        <h2 class="text-h6 full-width">
            {{
                $t('conversion__category_title', {
                    category: selectedCategory?.label,
                    from: selectedUnitFrom?.label,
                    to: selectedUnitTo?.label,
                })
            }}
        </h2>
        <q-card class="q-pa-md full-width">
            <q-input v-model="fromValue" type="number" clearable autofocus />
            <q-select
                v-model="selectedUnitFromId"
                :options="unitsFromOptions"
                emit-value
                map-options
            ></q-select>
        </q-card>

        <q-btn
            color="primary"
            @click="swap"
            round
            :icon="matSwapVert"
            class="q-ma-sm"
            size="lg"
            flat
        >
        </q-btn>

        <q-card class="q-pa-md full-width">
            <q-input type="number" v-model="toValue" readonly />
            <q-select
                v-model="selectedUnitToId"
                :options="unitsToOptions"
                emit-value
                map-options
            ></q-select>
        </q-card>
    </q-page>
</template>

<script lang="ts" setup>
import { ConversionCategories, ConversionService } from 'src/models/Conversion';
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { matSwapVert } from '@quasar/extras/material-icons';

defineOptions({
    name: 'ConversionPage',
});

const i18n = useI18n();

const categories = ref(ConversionCategories);
const categoryOptions = ref(
    categories.value.map((category) => ({
        label: i18n.t(category.label),
        value: category.id,
    }))
);
const selectedCategoryId = ref(categories.value[0].id);
const selectedCategory = computed(() =>
    ConversionService.selectCategory(categories.value, selectedCategoryId.value)
);
const unitsFrom = computed(() =>
    selectedCategory.value ? selectedCategory.value.units : []
);
const unitsFromOptions = computed(() =>
    unitsFrom.value.map((unit) => ({
        label: i18n.t(unit.label),
        value: unit.id,
    }))
);
const selectedUnitFromId = ref(selectedCategory.value?.units[0].id);
const selectedUnitFrom = computed(() => {
    console.log('selectedUnitFrom', selectedUnitFromId.value);
    return ConversionService.selectUnit(
        selectedCategory.value,
        selectedUnitFromId.value
    );
});
const unitsTo = computed(() =>
    ConversionService.excludeUnit(
        selectedCategory.value?.units,
        selectedUnitFromId.value
    )
);
const unitsToOptions = computed(() =>
    unitsTo.value.map((unit) => ({
        label: i18n.t(unit.label),
        value: unit.id,
    }))
);
const selectedUnitToId = ref(selectedCategory.value?.units[1].id);
const selectedUnitTo = computed(() => {
    console.log('selectedUnitTo', selectedUnitToId.value);
    return ConversionService.selectUnit(
        selectedCategory.value,
        selectedUnitToId.value
    );
});
const fromValue = ref(1);
const toValue = ref(
    ConversionService.convert(
        selectedUnitFrom.value,
        selectedUnitTo.value,
        fromValue.value
    )
);
const updateToValue = () => {
    const from = selectedUnitFrom.value;
    const to = selectedUnitTo.value;
    const value = fromValue.value;
    if (!from || !to || !value) {
        return console.log('updateToValue', 'missing values', from, to, value);
    }
    const fromAsBase =
        'factor' in from ? value * from.factor : from.convertToBase(value);
    toValue.value =
        'factor' in to
            ? fromAsBase / to.factor
            : to.convertFromBase(fromAsBase);
    console.log('updateToValue', toValue.value, from, to, value);
};
const swap = () => {
    const newFromId = selectedUnitToId.value;
    const newFromValue = toValue.value;
    selectedUnitToId.value = selectedUnitFromId.value
        ? selectedUnitFromId.value
        : '';
    selectedUnitFromId.value = newFromId;
    fromValue.value = newFromValue;
};
watch([selectedUnitFromId, selectedUnitToId, fromValue], updateToValue);
watch(selectedCategoryId, () => {
    selectedUnitFromId.value = selectedCategory.value?.units[0].id;
    selectedUnitToId.value = selectedCategory.value?.units[1].id;
    fromValue.value = 1;
});

// const toValue = ref(calculateToValue.value());
</script>
