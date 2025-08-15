<template>
    <Wave
        foreground-color="background"
        line-color="background"
        position="top"
    />
    <section>
        <h2>
            I offer a
            <strong class="color-accent-4">unique perspective</strong> to
            application design through my background in
            <strong class="color-accent-4">museums</strong> and
            <strong class="color-accent-4">games</strong>.
        </h2>
        <div class="card-container">
            <Card>
                <template #header>
                    <i class="fas fa-object-group"></i>
                </template>
                <template #content>
                    <p>
                        I've built all sorts of things, from
                        <strong>museum exhibits</strong> and automation
                        platforms to <strong>mobile games</strong>.<br /><br />
                        In my free time, I like creating new apps just for fun
                        and keeping up with the latest libraries and trends.
                    </p>
                </template>
            </Card>
            <Card>
                <template #header>
                    <i class="fas fa-code"></i>
                </template>
                <template #content>
                    <p>
                        My stack covers the usual web-dev essentials, with a
                        focus on semantic HTML, TypeScript, Node.js, and Vue.js.
                        <br /><br />
                        I'm fluent in both English and German, and have had the
                        chance to live and work in both the United States and
                        Germany.
                    </p>
                </template>
            </Card>
            <Card>
                <template #header>
                    <i class="fas fa-globe-americas"></i>
                </template>
                <template #content>
                    <p>
                        I move pixels for a living, but that's only part of what
                        keeps me going.<br /><br />When I'm off the clock,
                        you'll usually find me playing tabletop RPGs, laughing
                        along to comedy podcasts, or just hanging out with my
                        wife and our cat.
                    </p>
                </template>
            </Card>
        </div>
    </section>
</template>

<script setup lang="ts">
import Wave from './Wave.vue';
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h2 {
        text-align: center;
        margin: 0 auto;
        max-width: 64rem;
    }
}

.card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    i {
        opacity: 0.2;
    }
}
</style>

<!-- Mobile queries -->
<style lang="scss" scoped>
@media (max-width: 768px) {
    .card-container {
        // Width should be 100% of the viewport, and align to the left
        width: 100vw;
        margin-left: calc(-50vw + 50%);

        // Cards should be scrollable, with one card visible at a time
        display: flex;
        overflow-x: auto;
        gap: 1rem;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* Internet Explorer and Edge */
        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, and Opera */
        }
        padding: 2rem;

        & > * {
            flex: 0 0 auto;
            scroll-snap-align: center;
            width: 80%;
        }
    }
}
</style>
