<template>
    <div class="hero">
        <div class="hero-background"></div>
        <section class="hero-content">
            <h1>Hi, I'm Olin.</h1>
            <h2>I'm a web-developer living and working in Albany, New York.</h2>
            <h2 class="muted">
                I write full-stack code for web-apps and games.
            </h2>
        </section>
    </div>
</template>

<script setup lang="ts">
// Placeholder Hero component
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    overflow: hidden;
}

.hero-background {
    position: relative;
    width: 100%;
    min-height: 40rem;
    background: url('/assets/images/hero.jpg') no-repeat center center/cover;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.5) 100%
        );
        pointer-events: none;
    }
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    z-index: 1;
    color: var(--surface);
    transform: translateY(-50%);
}
</style>

<style lang="scss" scoped>
.hero {
    .hero-content {
        padding: 3.2rem;

        h1 {
            font-size: 4.8rem;
        }

        h2 {
            font-size: 2.4rem;
        }
    }
}
</style>
