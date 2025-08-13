<template>
    <div class="timeline-block">
        <div class="company-location-and-dates">
            <h2>{{ company }}</h2>
            <p>{{ location }}</p>
            <p class="muted">{{ dateStart }} - {{ dateEnd }}</p>
        </div>

        <div class="timeline-graphic">
            <div class="timeline-line"></div>
            <div class="timeline-dot-background"></div>
            <div class="timeline-dot" :style="{ backgroundColor: color }"></div>
        </div>

        <div class="position-and-descriptions">
            <h2>{{ position }}</h2>
            <ul>
                <li v-for="(item, index) in description" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    index: number;
    dateStart: string;
    dateEnd: string;
    location: string;
    company: string;
    position: string;
    description: string[];
}>();

const color = computed(() => {
    const colors = [
        'var(--accent-1)',
        'var(--accent-2)',
        'var(--accent-3)',
        'var(--accent-4)'
    ];
    return colors[props.index % colors.length];
});
</script>

<style lang="scss" scoped>
.timeline-block {
    display: grid;
    grid-template-columns: 1fr 4rem 1fr;
    gap: 2rem;

    .position-and-descriptions ul {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }
}

.company-location-and-dates,
.position-and-descriptions {
    padding-bottom: 4rem;
}

.timeline-graphic {
    display: flex;
    justify-content: center;
    height: 100%;

    position: relative;

    > .timeline-dot-background {
        position: absolute;
        top: 1rem;
        width: 3.2rem;
        height: 3.2rem;
        transform: translateY(-25%);
        border-radius: 50%;
        background-color: var(--surface);
        border: 1px dashed var(--border);
    }

    > .timeline-dot {
        // Colored dot
        position: absolute;
        top: 1rem;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background-color: var(--border); // Overridden by inline style
    }

    > .timeline-line {
        border-left: 1px dashed var(--border);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>


