<template>
    <q-list class="justify-evenly">
        <q-item
            v-for="tool in tools"
            :key="tool.id"
            class="full-width q-px-none"
        >
            <q-btn
                :href="tool.href"
                color="primary"
                outline
                :icon="tool.icon"
                :label="$t(tool.label)"
                class="full-width text-left items-start"
                size="lg"
            />
        </q-item>
    </q-list>
</template>

<script lang="ts" setup>
import { Tools } from 'src/models/Tools';

const tools = Tools;
</script>
