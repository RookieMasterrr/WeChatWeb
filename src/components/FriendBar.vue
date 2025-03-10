<template>
    <div class="friendbar">
        <header>
            <input type="text" placeholder="搜索">
            <div class="plus">
                <span class="iconfont">&#xe8fe;</span>
            </div>
        </header>
        <section>
            <ChatRecords />
        </section>
    </div>
</template>

<script setup lang="ts">
import ChatRecords from './ChatRecords.vue';
</script>

<style scoped>
.friendbar {
    height: 100vh;
    width: 370px;
    background-color: lightgoldenrodyellow;
}

/* header */
header {
    box-sizing: border-box;

    padding: 0 13px;
    width: 100%;
    height: 60px;
    background-color: lightgreen;

    display: flex;

    align-items: center;
    justify-items: space-between;
    gap: 8px;
}

header input {
    height: 27px;

    width: 100%;
    flex: 1;
    border-radius: 3px;
    outline: none;
    background-color: #202020;
    border: 0px;
    font-size: 12px;

    color: #575757;

    background-image: url(../assets/search.svg);
    background-size: 12px 12px;
    background-position: 6px 7px;
    background-repeat: no-repeat;
    padding-left: 22px;
}

header .plus {
    width: 27px;
    height: 27px;

    border-radius: 3px;

    background-color: #202020;
    text-align: center;
    line-height: 27px;
}

.plus .iconfont {
    color: gray;
    font-size: 20px;
}

section {
    width: 100%;
    height: calc(100% - 60px);
    background-color: lightgrey;
}
</style>