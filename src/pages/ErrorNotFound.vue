<template>
    <div
        class="fullscreen bg-dark text-white text-center q-pa-md flex flex-center"
    >
        <div>
            <div style="font-size: 30vh">404</div>

            <div class="text-h2" style="opacity: 0.4">
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
