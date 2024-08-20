<template>
    <q-bar class="q-pa-md bg-secondary">
        <q-toolbar-title>{{ $t('conversion__page_title') }}</q-toolbar-title>
        <q-btn flat rounded dense icon="menu" to="/" />
    </q-bar>

    <q-page padding class="column items-center">
        <conversion-category-select
            :label-empty="$t('conversion__category_empty_label')"
            v-model="selectedCategory"
            @update:model-value="updateUnits"
        />

        <q-separator spaced class="full-width" v-model="selectedCategory" />

        <div class="row full-width">
            <q-icon
                :name="selectedCategory?.icon"
                size="2em"
                class="q-mb-md q-mr-sm q-mt-md"
            />
            <h2 class="text-h6">
                {{
                    $t('conversion__category_title', {
                        category: selectedCategory?.label,
                        from: selectedUnitFrom?.label,
                        to: selectedUnitTo?.label,
                    })
                }}
            </h2>
        </div>
        <q-card class="q-pa-md full-width">
            <q-input v-model="fromValue" type="number" clearable autofocus />
            <q-select
                v-model="selectedUnitFromId"
                :options="units"
                option-value="id"
                emit-value
                map-options
            ></q-select>
        </q-card>

        <q-btn
            id="swap-button"
            color="primary"
            @click="swap"
            round
            :icon="matSwapVert"
            class="q-ma-sm"
            size="lg"
            flat
            :class="swapped ? 'rotate-180' : ''"
        >
        </q-btn>

        <q-card class="q-pa-md full-width">
            <q-input type="text" v-model="toValue" readonly />
            <q-select
                v-model="selectedUnitToId"
                :options="units"
                option-value="id"
                emit-value
                map-options
            ></q-select>
        </q-card>
    </q-page>
</template>

<style lang="scss" scoped>
#swap-button {
    transition: transform 0.5s ease-out;
}
</style>

<script lang="ts" setup>
import {
    ConversionCategory,
    ConversionService,
    ConversionUnit,
} from 'src/models/Conversion';
import { computed, ref } from 'vue';
import { matSwapVert } from '@quasar/extras/material-icons';
import ConversionCategorySelect from 'src/components/conversion/CategorySelect.vue';

defineOptions({
    name: 'ConversionPage',
});

const swapped = ref(false);
const selectedCategory = ref<ConversionCategory>();
const categorySelector = ref(null);
const selectedUnitFromId = ref(selectedCategory.value?.units[0].id);
const selectedUnitFrom = computed(() => {
    console.log(
        'selectedUnitFrom',
        selectedUnitFromId.value,
        selectedCategory.value
    );
    return ConversionService.selectUnit(
        selectedCategory.value as ConversionCategory,
        selectedUnitFromId.value as string
    );
});
const units = ref<ConversionUnit[]>();
const selectedUnitToId = ref(selectedCategory.value?.units[1].id);
const selectedUnitTo = computed(() => {
    console.log(
        'selectedUnitTo',
        selectedUnitToId.value,
        selectedCategory.value
    );
    return ConversionService.selectUnit(
        selectedCategory.value as ConversionCategory,
        selectedUnitToId.value as string
    );
});
const fromValue = ref(1);
const toValue = ref(
    ConversionService.convert(
        selectedUnitFrom.value,
        selectedUnitTo.value,
        fromValue.value
    ).toLocaleString()
);

const swap = () => {
    const newFromId = selectedUnitToId.value;
    selectedUnitToId.value = selectedUnitFromId.value
        ? selectedUnitFromId.value
        : '';
    selectedUnitFromId.value = newFromId;
    //@ts-expect-error not sure why this is not working
    categorySelector.value?.showPopup();
};

const updateUnits = (category: ConversionCategory) => {
    units.value = category.units;
    selectedUnitFromId.value =
        ConversionService.selectDefaultUnit(category)?.id;
    selectedUnitToId.value =
        ConversionService.selectNonDefaultUnit(category)?.id;
};

// const toValue = ref(calculateToValue.value());
</script>
