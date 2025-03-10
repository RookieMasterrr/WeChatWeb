<template>
    <div class="record">
        <div class="avatar">
            <img :src="avatarUrl" alt="">
        </div>
        <div class="content">
            <div class="title">{{ title }}</div>
            <div class="time">{{ time }}</div>
            <div class="message">{{ content }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(['avatarUrl', 'title', 'time', 'content'])
</script>

<style scoped>
.record {
    box-sizing: border-box;
    padding: 0;
    padding-left: 12px;
    padding-right: 15px;
    width: 100%;
    height: 65px;
    background-color: #f6f6f6;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 10px;
}

.avatar {
    width: 37px;
    height: 37px;
    /* background-color: lightblue; */
}

.avatar img {
    max-width: 100%;
    max-height: 100%;

    border-radius: 6px;
}

.content {
    height: 37px;
    flex: 1;
}

.content {
    display: grid;
    grid-template-columns: 6fr 1fr;
    align-items: center;
    justify-items: start;

    color: #181818;
}

.content .title {
    grid-column: 1 / 2;
    grid-row: 1;

    font-size: 12px;
    /* font-weight: bolder; */
}

.content .time {
    grid-column: 2 / 3;
    grid-row: 1;

    font-size: 10px;

    color: #9b9b9b;

    justify-self: end;
}

.content .message {
    grid-column: 1 / 3;
    grid-row: 2;

    font-size: 11px;


    color: #9b9b9b;
}

@media (max-width: 500px) {
    .content {
        display: none;
    }

    .record {
        justify-content: center;
    }
}
</style>