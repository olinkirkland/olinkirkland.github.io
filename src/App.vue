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

<template>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Timeline />
    <CertificatesEducation />
    <ContactBanner />
    <Footer />
</template>

<style lang="scss">
@use 'assets/scss/reset.scss';
@use 'assets/scss/styles.scss';
@use 'assets/scss/variables.scss';
</style>
