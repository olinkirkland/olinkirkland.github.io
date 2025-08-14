<template>
    <section>
        <h2>Personal <strong class="color-accent-4">Projects</strong></h2>
        <div class="projects-carousel">
            <ul class="projects-list">
                <li v-for="project in projects" :key="project.name">
                    <ProjectCard :project="project" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

const projects = [
    {
        name: 'Online in the Dark',
        description:
            'My first attempt at creating a "Virtual Tabletop" (VTT) for the tabletop roleplaying game Blades in the Dark. This project was a learning experience, and I later moved on to Scoundry, which is a more polished version of this idea, albeit with a narrower scope. Online in the Dark features a fully functional shared "party" mode in which players can see each other\'s character sheets and interact with them in real-time. I\'ve since let the project go, but it remains a testament to my early work in this area.',
        tags: ['typescript', 'vue', 'sass', 'node', 'express'],
        link: 'https://github.com/olinkirkland/online-in-the-dark',
        linkType: 'github-source',
        images: [
            '/assets/images/projects/online-in-the-dark/online-in-the-dark-1.webp',
            '/assets/images/projects/online-in-the-dark/online-in-the-dark-2.webp',
            '/assets/images/projects/online-in-the-dark/online-in-the-dark-3.webp'
        ],
        year: 2024
    },
    {
        name: 'Scoundry',
        description:
            "A character keeper web-app for the tabletop roleplaying game Blades in the Dark. I developed this application to help players manage their characters and track their progress. It features offline sharing via 64-bit encoding, allowing users to share their character data easily, and localization into several languages (provided by the game's community).",
        tags: ['typescript', 'vue', 'sass'],
        link: 'https://scoundry.com',
        linkType: 'demo',
        images: [
            '/assets/images/projects/scoundry/scoundry-1.png',
            '/assets/images/projects/scoundry/scoundry-2.png'
        ],
        year: 2024
    },
    {
        name: 'Grimoire',
        description:
            'A web-based character keeper for the tabletop roleplaying game Grimwild. I developed this after finishing Scoundry, applying the lessons learned from that project. Grimoire features a more modern design, and has a much larger scope since the characters are much more complex. I implemented markov-chain name generation, 12 character classes, each with many customizable abilities, and custom reusable UI components.',
        tags: ['typescript', 'vue', 'sass'],
        link: 'https://olinkirk.land/grimoire',
        linkType: 'demo',
        images: [
            '/assets/images/projects/grimoire/grimoire-1.png',
            '/assets/images/projects/grimoire/grimoire-2.png',
            '/assets/images/projects/grimoire/grimoire-3.png'
        ],
        year: 2025
    }
];
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    h2 {
        text-align: center;
    }
}

ul.projects-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    > li {
        > .card {
            height: 100%;
        }
    }
}
</style>
