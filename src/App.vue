<template>
    <div class="app-layout">
        <!-- <Nav /> -->
        <div class="sections">
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <CertificatesEducation />
            <ContactBanner />
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import About from './components/About.vue';
import CertificatesEducation from './components/CertificatesEducation.vue';
import ContactBanner from './components/ContactBanner.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Timeline from './components/Timeline.vue';
import { initializeI18nInstance } from './i18n/locale';

initializeI18nInstance();
</script>

<style lang="scss">
@use 'assets/scss/reset.scss';
@use 'assets/scss/styles.scss';
@use 'assets/scss/variables.scss';

.app-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--background);

    > .sections {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>
