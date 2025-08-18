<template>
    <div
        class="wave-container"
        :class="position || 'bottom'"
        :style="{ backgroundColor: `var(--${backgroundColor})` }"
    >
        <svg
            class="wave"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
                :fill="`var(--${foregroundColor})`"
                d="M0,128L48,128C96,128,192,128,288,149.3C384,171,480,213,576,218.7C672,224,768,192,864,154.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        <svg
            v-if="lineColor"
            class="line"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
                d="M0,128L48,128C96,128,192,128,288,149.3C384,171,480,213,576,218.7C672,224,768,192,864,154.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128"
                fill="none"
                :stroke="`var(--${lineColor})`"
                stroke-width="5"
            />
        </svg>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    backgroundColor: string;
    foregroundColor: string;
    lineColor?: string;
    position?: 'top' | 'bottom';
}>();
</script>

<style lang="scss" scoped>
.wave-container {
    position: relative;
    height: 10rem;
    overflow: hidden;
}

.top {
    transform: rotate(180deg);
}

.wave,
.line {
    position: absolute;
    width: 100%;
    min-width: 96rem;
    height: 10rem;
}

.line {
    top: 0.4rem;
}
</style>
