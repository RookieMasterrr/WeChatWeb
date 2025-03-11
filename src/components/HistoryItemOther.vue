<template>
    <div class="historyitem">
        <div class="avatar">
            <img src="https://cdn.v2ex.com/gravatar/63bba9b778608089af447fb4009d0c63?s=48&d=retro" alt="">
        </div>
        <div class="container">
            <header>+F</header>
            <div class="content">
                <div class="triangle"></div>
                <div class="message">
                    你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.historyitem {
    display: flex;
    gap: 10px;
    margin: 13px 0px;
    justify-content: start;
}

.avatar>img {
    width: 31px;
    height: 31px;
    object-fit: cover;
    border-radius: 3px;
}

.container {
    width: 45%;
}

.container>header {
    color: #9b9b9b;
    font-size: 12px;
    letter-spacing: 0.5px;
}

.container>.content {
    position: relative;
    margin-top: 8px;
    border-radius: 5px;
    background-color: white;
    padding: 10px;
    font-size: 14px;
    line-height: 20px;
}

.content .triangle {
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-right: 6px solid white;
    position: absolute;
    top: calc(0% + 10px);
    left: calc(0% - 12px);
}
</style>