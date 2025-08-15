<template>
    <div class="hero">
        <div class="hero-background"></div>
        <section class="hero-content">
            <h1>Olin Kirkland</h1>
            <Marker />
            <div>
                <h2>Web-developer based in Albany, New York</h2>
                <h2 class="muted">
                    Writing full-stack code for websites and applications
                </h2>
            </div>

            <!-- Social Links and Resume Button -->
            <div class="hero-links">
                <!-- Download Resume -->
                <Button class="light" @click="downloadResume">
                    <i class="fas fa-arrow-down"></i>
                    <span>Download my Resume</span>
                </Button>

                <div class="flex">
                    <a
                        href="https://github.com/olinkirkland"
                        class="icon"
                        target="_blank"
                    >
                        <i class="icon fab fa-github"></i>
                    </a>
                    <a
                        href="https://linkedin.com/in/olin-kirkland"
                        class="icon"
                        target="_blank"
                    >
                        <i class="icon fab fa-linkedin"></i>
                    </a>
                </div>
                <a class="link" href="mailto:me@olinkirk.land">
                    me@olinkirk.land
                </a>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import downloadResume from '../download-resume';
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    overflow: hidden;
}

.hero-background {
    position: relative;
    width: 100%;
    min-height: 64rem;
    background: url('/assets/images/hero.jpg') no-repeat center center/cover;
}

.hero-content {
    position: absolute;
    top: 50%;
    padding-bottom: 20rem;
    left: 0;
    right: 0;
    z-index: 1;
    color: var(--surface);
    transform: translateY(-50%);

    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.hero-links {
    display: flex;
    gap: 2.4rem;
    align-items: center;
}

.icon {
    color: var(--surface);
    font-size: 2.4rem;
}
</style>

<!-- Mobile queries -->
<style lang="scss" scoped>
@media (max-width: 768px) {
    .hero-content {
        padding: 2rem;
        text-align: center;

        h1 {
            font-size: 4rem;
        }

        h2 {
            font-size: 1.8rem;
        }
    }

    .hero-links {
        flex-direction: column;
        align-items: center;

        .icon {
            margin-bottom: 1rem;
        }
    }
}
</style>
