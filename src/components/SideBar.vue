<template>
    <div class="sidebar">
        <div class="finder">
            <div class="close"><span class="iconfont">&#xeaf2;</span></div>
            <div class="min"><span class="iconfont">&#xe650;</span></div>
            <div class="max"><span class="iconfont">&#xe613;</span></div>
        </div>
        <div class="img">
            <img src="@/assets/dog.jpg">
        </div>
        <section class="up">
            <div class="item"><span class="iconfont">&#xe622;</span></div>
            <div class="item"><span class="iconfont">&#xf0226;</span></div>
            <div class="item"><span class="iconfont">&#xe609;</span></div>
            <div class="item"><span class="iconfont">&#xe7e0;</span></div>
            <div class="item"><span class="iconfont">&#xe635;</span></div>
            <div class="item"><span class="iconfont">&#xe6dd;</span></div>
            <div class="item"><span class="iconfont">&#xe6a2;</span></div>
            <div class="item"><span class="iconfont">&#xe516;</span></div>
        </section>
        <section class="down">
            <div class="item"><span class="iconfont">&#xe619;</span></div>
            <div class="item"><span class="iconfont">&#xeb4d;</span></div>
            <div class="item"><span class="iconfont">&#xe60c;</span></div>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.sidebar {
    background-color: lightcoral;
    height: 100%;
    width: 61px;
}

section>.item {
    width: 30px;
    height: 30px;
    /* background-color: lightgoldenrodyellow; */
    text-align: center;
}

.up .iconfont,
.down .iconfont {
    font-size: 20px;
    color: gray;
}

.item:hover {
    transform: scale(1.7);
    transition: transform 0.3s;
    cursor: pointer;
}

.sidebar {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
}

/* img */
.img {
    margin-top: 36px;
}

.img:hover {
    margin-top: 36px;
    cursor: pointer;
}

.img>img {
    width: 36px;
    height: 36px;
    border-radius: 5px;
}

/* finder */
.finder {
    display: flex;
    height: 20px;
    gap: 5px;
    align-items: center;
}

.finder .iconfont {
    font-size: 9px;
    opacity: 0;
}

.finder:hover .iconfont {
    opacity: 1;
    cursor: default;
}

.finder>.close,
.finder>.min,
.finder>.max {
    font-weight: bolder;
    text-align: center;
    line-height: 8px;
    color: black;
}

.finder>.close {
    width: 12px;
    height: 12px;

    background-color: red;
    border-radius: 50%;
}

.finder>.min {
    width: 12px;
    height: 12px;

    background-color: yellow;
    border-radius: 50%;
}

.finder>.max {
    width: 12px;
    height: 12px;
    background-color: greenyellow;
    border-radius: 50%;
}

/* section up */
section.up {
    margin-top: 18px;
    flex: 1;
    line-height: 30px;
}

section.up {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* section down */
section.down {
    margin-bottom: 30px;
    line-height: 30px;
}

section.down {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>