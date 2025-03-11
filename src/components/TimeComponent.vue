<template>
    <div class="timecomponent">
        {{ time }}
    </div>
</template>

<script setup lang="ts">
defineProps(["time"])
</script>

<style scoped>
.timecomponent {
    text-align: center;
    color: #9b9b9b;

    font-size: 12px;
}
</style>