<template>
    <q-select
        ref="categorySelector"
        v-model="selectedId"
        :options="options"
        option-value="id"
        class="full-width conversion-category-select"
        transition-show="jump-down"
        transition-hide="jump-up"
        transition-duration="100"
        color="accent"
        emit-value
        map-options
        @update:model-value="updateSelected"
        @popup-show="hideLabel = true"
        @popup-hide="hideLabel = false"
    >
        <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
                <q-item-section side>
                    <q-icon
                        :name="scope.opt.icon"
                        :color="scope.itemProps.color"
                    />
                </q-item-section>
                <q-item-section dense class="full-width">{{
                    scope.opt.label
                }}</q-item-section>
            </q-item>
        </template>
        <template v-slot:selected>
            <div
                class="row selection-text justify-center"
                v-if="!hideLabel && selected"
            >
                <div class="word">{{ $t('conversion__convert') }}</div>
                <q-chip
                    :label="selected.label"
                    color="accent"
                    :icon="selected.icon"
                    class="chip"
                />
                <div class="word">{{ $t('conversion__from') }}</div>
                <q-chip color="accent" class="chip" :label="labelFromUnit" />
                <div class="word">{{ $t('conversion__to') }}</div>
                <q-chip color="accent" class="chip" :label="labelToUnit" />
            </div>
            <div
                class="no-selection-text self-center"
                v-else
                v-html="labelEmpty"
            ></div>
        </template>
    </q-select>
</template>

<style lang="scss">
.conversion-category-select {
    .q-item {
        padding: 8px 16px;
    }
    .q-item-section {
        padding: 0;
    }
    .word {
        font-weight: 300;
    }
    .chip {
        margin-right: 3px;
    }
    .selection-text,
    .no-selection-text {
        line-height: 1.6;
        padding: 8px 4px;
        text-align: center;
    }
    .selection-text {
        font-size: 1.6rem;
    }
    .no-selection-text {
        font-size: 2rem;
        font-weight: 200;
        strong {
            color: var(--q-accent);
            font-weight: 400;
            font-size: 2.2rem;
        }
    }
}
</style>

<script lang="ts" setup>
import {
    ConversionCategories,
    ConversionCategory,
    ConversionService,
    ConversionUnit,
} from 'src/models/Conversion';
import { ref } from 'vue';

defineOptions({
    name: 'ConversionCategorySelect',
});

const props = defineProps({
    labelEmpty: String,
    defaultId: String,
});
console.log(props.labelEmpty);

const options = ref<ConversionCategory[]>(ConversionCategories());
const selected = defineModel<ConversionCategory>();
const selectedId = ref(props.defaultId);
const hideLabel = ref(false);
const labelToUnit = ref('?');
const labelFromUnit = ref('?');

const updateSelected = () => {
    const category = ConversionService.selectCategory(
        options.value as ConversionCategory[],
        selectedId.value as string
    );
    ConversionService.activateDefaultUnits(category);
    const { from, to } = ConversionService.filterActiveUnits(
        category?.units as ConversionUnit[]
    );
    labelToUnit.value = to?.short || '?';
    labelFromUnit.value = from?.short || '?';
    selected.value = category;
};
</script>
