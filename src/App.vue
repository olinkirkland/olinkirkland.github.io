<script setup lang="ts"></script>

<template>
    <div>
        <h1 class="clip-text">Olin Kirkland</h1>
    </div>
</template>

<style scoped lang="scss">
* {
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: linear-gradient(to top, #116bb2 0%, #68d0e0 100%);
}

.clip-text {
    font-size: 7rem;
    font-weight: 700;
    text-align: center;
    color: #68d0e0;

    @supports (background-clip: text) or (-webkit-background-clip: text) {
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: url(https://media.giphy.com/media/xULW8Fw2ZhznUptrYA/giphy.gif);
        background-size: cover;
        background-position: center;
    }
}

h1 {
    color: #fff;
    margin: 0;

    pre {
        span {
            background-color: rgba(#000, 0.15);
            padding: 0.3rem;
            border-radius: 6px;
        }
    }
}
</style>
