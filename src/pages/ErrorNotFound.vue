<template>
    <div
        class="fullscreen bg-dark text-white text-center q-pa-md flex flex-center"
    >
        <div>
            <div class="text-h1">404</div>

            <div class="text-h4" style="opacity: 0.4">
                Oops. Nothing here...
            </div>

            <q-btn
                class="q-mt-xl"
                to="/"
                label="Go Home"
                no-caps
                color="primary"
                elevated
            />
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ErrorNotFound',
});
</script>
