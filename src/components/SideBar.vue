<template>
    <div class="sidebar">
        <div class="finder">
            <div class="close"></div>
            <div class="min"></div>
            <div class="max"></div>
        </div>
        <div class="img">
            <img src="@/assets/dog.jpg">
        </div>
        <section class="up">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
            <div class="item">8</div>
        </section>
        <section class="down">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
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
    background-color: lightgoldenrodyellow;
    text-align: center;
}

.sidebar {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
}

/* img */
.img {
    margin-top: 35px;
}

.img>img {
    width: 36px;
    height: 36px;
    border-radius: 5px;
}

/* finder */
.finder {
    display: flex;
    height: 30px;
    gap: 5px;
    align-items: center;
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