<template>
    <div class="historyitem">
        <div class="container">
            <div class="content">
                <div class="triangle"></div>
                <div class="message">
                    你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。你好，世界。
                </div>
            </div>
        </div>
        <div class="avatar">
            <img src="../assets/dog.jpg" alt="">
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
    justify-content: end;
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
    border-radius: 5px;
    background-color: #8ae95e;
    padding: 10px;
    font-size: 14px;
    line-height: 20px;
}

.content .triangle {
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-left: 6px solid #8ae95e;
    /* border-left: 6px solid black; */
    position: absolute;
    top: calc(0% + 10px);
    right: calc(0% - 12px);
}
</style>