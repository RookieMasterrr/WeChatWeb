<template>
    <div class="chatcontent">
        <header>
            <div class="name">uu</div>
            <div class="more"><span class="iconfont">&#xf0170;</span></div>
        </header>
        <div class="content">
            <TimeComponent :time="'16:40'" />
            <HistoryItemOther />
            <HistoryItemMe />
            <HistoryItemMe />
            <TimeComponent :time="'16:42'" />
            <HistoryItemMe />
            <HistoryItemOther />
            <HistoryItemMe />
            <HistoryItemOther />
        </div>
        <div class="chatbox">
            <section class="tools">
                <span class="iconfont" style="margin-left: 15px;">&#xe625;</span>
                <span class="iconfont">&#xe7e0;</span>
                <span class="iconfont">&#xe675;</span>
                <span class="iconfont">&#xe65e;</span>
                <span class="iconfont">&#xe93e;</span>
                <span class="iconfont">&#xe8da;</span>
            </section>
            <textarea />
        </div>
    </div>
</template>

<script setup lang="ts">
import HistoryItemOther from './HistoryItemOther.vue';
import HistoryItemMe from './HistoryItemMe.vue';
import TimeComponent from './TimeComponent.vue';
</script>

<style scoped>
.chatcontent {
    flex: 1;
    height: 100vh;

    background-color: #f1f1f1;
    border-left: 1px solid #dedede;
}

/* header */
header {
    box-sizing: border-box;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dedede;
}

header .name {
    margin-left: 20px;
}

header .more {
    margin-right: 19px;
}

.more .iconfont {
    font-size: 22px;
}


/* content */
.content {
    box-sizing: border-box;
    border-bottom: 1px solid #dedede;
    height: 60%;
    padding: 10px;
    overflow: auto;
    scrollbar-width: none;
}

/* chatbox */
.chatbox {
    box-sizing: border-box;
    height: calc(100% - 62px - 60%);
}

/* chatbox.tools */
section.tools {
    box-sizing: border-box;
    display: flex;
    height: 60px;
    align-items: center;
    gap: 15px;
}

.tools .iconfont {
    font-size: 25px;
    color: gray;

    cursor: default
}

.tools .iconfont:nth-child(4) {
    margin-left: -15px;
    font-size: 10px;
    font-weight: bolder;
}

.tools .iconfont:nth-child(5) {
    font-size: 30px;
    flex: 1;
}

.tools .iconfont:last-child {
    margin-right: 20px;
}

/* chatbox.input */
.chatbox textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 60px);
    padding: 0px 18px;
    padding-bottom: 20px;
    border: 0px;
    background-color: #f1f1f1;
    outline: none;
    caret-color: #006fff;
    scrollbar-width: none;
    resize: none;
}
</style>