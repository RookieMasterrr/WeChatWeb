<template>
    <div class="app">
        <sidebar />
        <friendbar />
        <chatcontent />
    </div>
</template>

<script setup lang="ts">
import sidebar from './components/SideBar.vue';
import friendbar from './components/FriendBar.vue';
import chatcontent from './components/ChatContent.vue';
</script>

<style scoped>
.app {
    width: 100%;
    height: 100vh;
    display: flex;
}
</style>