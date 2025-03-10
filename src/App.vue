<template>
    <div class="app">
        <sidebar />
        <friendbar />
    </div>
</template>

<script setup lang="ts">
import sidebar from './components/SideBar.vue';
import friendbar from './components/FriendBar.vue';
</script>

<style scoped>
.app {
    width: 100%;
    height: 100vh;
    background-color: lightblue;
    display: flex;
}
</style>