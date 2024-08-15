<template>
    <div
        class="fullscreen bg-teal text-white text-center q-pa-md flex flex-center"
    >
        <div>
            <div style="font-size: 30vh">
                <q-icon name="sentiment_very_dissatisfied" />
            </div>

            <div class="text-h2" style="opacity: 0.4">
                Oops. Nothing here...
            </div>

            <q-btn class="q-mt-xl" to="/" label="Go Home" no-caps />
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ErrorNotFound',
});
</script>
