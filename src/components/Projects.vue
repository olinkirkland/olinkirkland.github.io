<template>
    <section>
        <h2>
            My
            <strong class="color-accent-4">personal projects</strong> are where
            I experiment and build just for the
            <strong class="color-accent-4">fun</strong> of it.
        </h2>
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
        name: 'Loot Dragon',
        description:
            'Loot Dragon is an item browser for the <a href="https://paizo.com/pathfinder" target="_blank">Pathfinder 2e</a> roleplaying game. It allows users to search for items, view their details, and filter by various criteria. Users can link the app to local PDFs of various game books, allowing them to view items in context.<br/><br/>A backend API lets users create accounts to save their favorite items across devices.',
        tags: ['typescript', 'vue', 'sass', 'node', 'express', 'mongodb'],
        link: 'https://olinkirk.land/lootdragon/',
        linkType: 'demo',
        images: [
            '/assets/images/projects/loot-dragon/loot-dragon-1.png',
            '/assets/images/projects/loot-dragon/loot-dragon-2.png'
        ],
        year: 2023
    },
    {
        name: 'Scribbles',
        description:
            'In 2023, I began writing a series of one-page tabletop adventures. When they got a bit of traction on Reddit, I decided to create a website to host them all in one place. I wrote a couple scripts to generate markdown for my Reddit posts and to create images of the PDFs to post them on social media.<br/><br/>There are now about thirty adventures available on the site.',
        tags: ['typescript', 'vue', 'sass'],
        link: 'https://olinkirk.land/scribbles/',
        linkType: 'demo',
        images: [
            '/assets/images/projects/scribbles/scribbles-1.png',
            '/assets/images/projects/scribbles/scribbles-2.png'
        ],
        year: 2023
    },
    {
        name: 'Online in the Dark',
        description:
            'My first attempt at creating a Virtual Tabletop for the roleplaying game <a href="https://bladesinthedark.com/" target="_blank">Blades in the Dark</a>. This project was a learning experience, and I later moved on to Scoundry, which is a more polished version of this idea with a narrower scope.<br/></br>Online in the Dark featured a fully functional shared <em>party mode</em> in which players can see each other\'s character sheets and interact with them in real-time.',
        tags: ['typescript', 'vue', 'sass', 'node', 'express', 'mongodb'],
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
            'Scoundry is a web-app for the tabletop roleplaying game <a href="https://bladesinthedark.com/" target="_blank">Blades in the Dark</a>. I developed this application to help players manage their characters and track their progress.<br/><br/>It features offline sharing via 64-bit encoding, allowing users to share their character data easily, and localization into several languages (provided by the game\'s community).',
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
            'Grimoire is a web-based character keeper for the tabletop roleplaying game <a href="https://www.drivethrurpg.com/en/product/507201/grimwild-free-edition" target="_blank">Grimwild</a>, that I developed after finishing Scoundry.<br/><br/>Grimoire features a more modern design, and has a much larger scope since the characters are much more complex. I implemented markov-chain name generation, 12 character classes, each with many customizable abilities, and custom reusable UI components.',
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
].reverse(); // Reverse the order to show the most recent projects first
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    > h2 {
        max-width: 64rem;
        margin: 0 auto;
        text-align: center;
    }
}

ul.projects-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    > li {
        > .card {
            height: 100%;
        }
    }
}
</style>

<!-- Mobile queries -->
<style lang="scss" scoped>
@media (max-width: 768px) {
    ul.projects-list {
        grid-template-columns: 1fr;
    }
}
</style>
