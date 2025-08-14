<template>
    <section>
        <h2>
            I bring a
            <strong class="color-accent-4">unique perspective</strong> to
            application design through my background in
            <strong class="color-accent-4">museums</strong> and
            <strong class="color-accent-4">games</strong>.
        </h2>
        <div class="card-container">
            <Card class="accent-2">
                <template #header>
                    <i class="fas fa-object-group"></i>
                </template>
                <template #content>
                    <p>
                        I have a proven track record in mobile, web and desktop
                        development with a variety of projects ranging from
                        <strong>museum exhibits</strong> to automation
                        platforms, to
                        <strong>mobile games</strong>.<br /><br />I build apps
                        in my free time, staying up to date with libraries and
                        trends.
                    </p>
                </template>
            </Card>
            <Card class="accent-3">
                <template #header>
                    <i class="fas fa-code"></i>
                </template>
                <template #content>
                    <p>
                        My tech stack includes typical web-dev fare with a focus
                        on semantic HTML, <strong>TypeScript</strong>, Node.js
                        on the backend, and Vue.js.<br /><br />I'm a native
                        English and German speaker, and have worked and lived in
                        both the United States and Germany.
                    </p>
                </template>
            </Card>
            <Card class="accent-4">
                <template #header>
                    <i class="fas fa-globe-americas"></i>
                </template>
                <template #content>
                    <p>
                        Moving pixels is my occupation, but there's more to what
                        drives me.<br /><br />In my leisure time, I play
                        tabletop role-playing games and listen to comedy
                        podcasts. I also enjoy spending time with my wife and
                        cat.
                    </p>
                </template>
            </Card>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

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
