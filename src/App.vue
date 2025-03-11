<template>
    <div class="app">
        <sidebar />
        <friendbar class="friendbar" />
        <chatcontent class="chatcontent" />
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

@media screen and (max-width: 768px) {
    .app {
        flex-wrap: wrap;
    }

    .friendbar {
        flex: 1 0 300px;
    }

    .chatcontent {
        flex: 1 0 100%;
    }
}
</style>