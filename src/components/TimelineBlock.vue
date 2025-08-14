<template>
    <div class="timeline-block">
        <div class="company-location-and-dates">
            <div class="flex">
                <h2>
                    <strong>{{ company }}</strong>
                </h2>
                <a
                    class="icon"
                    :href="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fas fa-link"></i>
                </a>
            </div>
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
                <li
                    v-for="(item, index) in description"
                    :key="index"
                    class="muted"
                >
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
    link: string;
}>();

const color = computed(() => {
    const colors = [
        'var(--accent-1)',
        'var(--accent-2)',
        'var(--accent-3)',
        'var(--accent-4)',
        'var(--accent-5)'
    ];
    return colors[props.index % colors.length];
});
</script>

<style lang="scss" scoped>
.timeline-block {
    display: grid;
    grid-template-columns: 1fr 2rem 1fr;
    gap: 4rem;

    .position-and-descriptions ul {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        > li::before {
            content: '●';
            margin-right: 0.8rem;
        }
    }
}

.company-location-and-dates,
.position-and-descriptions {
    padding-bottom: 8rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.company-location-and-dates {
    text-align: right;
    > .flex {
        justify-content: flex-end;
        align-items: center; // Aligns company name and link icon
    }
}

.timeline-block:last-child {
    .position-and-descriptions,
    .company-location-and-dates {
        padding-bottom: unset;
    }

    .timeline-line {
        display: none;
    }
}

.timeline-graphic {
    display: flex;
    justify-content: center;
    height: 100%;

    position: relative;

    > .timeline-dot-background {
        position: absolute;
        top: 0.8rem;
        width: 3.2rem;
        height: 3.2rem;
        transform: translateY(-25%);
        border-radius: 50%;
        background-color: var(--surface);
        border: 1px solid var(--border);
    }

    > .timeline-dot {
        // Colored dot
        position: absolute;
        top: 0.85rem;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background-color: var(--border); // Overridden by inline style
    }

    > .timeline-line {
        border-right: 1px solid var(--border);
        width: 1px;
        position: absolute;
        top: 0.4rem;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}

.icon {
    color: var(--body);
    font-size: 2.2rem;
}
</style>

<!-- Mobile queries -->
<style lang="scss" scoped>
@media (max-width: 768px) {
    .timeline-block {
        width: 100%;
        display: grid;
        grid-template-areas:
            'timeline-graphic company-location-and-dates'
            'timeline-graphic position-and-descriptions';
        grid-template-columns: 4rem 1fr;
        grid-template-rows: auto 1fr;
        gap: 1rem;
    }

    .company-location-and-dates,
    .position-and-descriptions {
        text-align: right;

        &.company-location-and-dates {
            padding-bottom: unset;
        }

        .flex {
            gap: 0.8rem;
            justify-content: flex-end;
            align-items: flex-end;
            a > i {
                font-size: 1.2rem;
            }
        }

        h2 {
            font-size: 1.6rem;
        }

        > p {
            font-size: 1.2rem;
        }

        > ul {
            display: block !important;
            line-height: 1;
            max-width: 20rem;
            > li {
                display: inline !important;
                font-size: 1.2rem;
                &::before {
                    margin-left: 0.4rem !important;
                    margin-right: 0.4rem !important;
                }
                &:first-of-type::before {
                    content: '';
                }
            }
        }
    }

    .timeline-graphic {
        grid-area: timeline-graphic;
        align-self: stretch; /* Ensures it fills the full column height */
    }
}
</style>
