<template>
    <div class="timeline-background">
        <section>
            <div v-for="(entry, index) in timelineEntries" :key="index">
                <TimelineBlock
                    :index="index"
                    :dateStart="entry.dateStart"
                    :dateEnd="entry.dateEnd"
                    :location="entry.location"
                    :company="entry.company"
                    :position="entry.position"
                    :description="entry.description"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import TimelineBlock from './TimelineBlock.vue';

const timelineEntries = [
    {
        dateStart: 'September 2015',
        dateEnd: 'May 2018',
        location: 'Houston, Texas, United States',
        company: 'Paul Bernhard Exhibit Design and Consulting',
        position: 'Application Developer',
        description: [
            'Built museum touchscreen apps and kiosks',
            'Created Texas energy data visualizations',
            'Met with curators for requirements and prototypes'
        ]
    },
    {
        dateStart: 'May 2018',
        dateEnd: 'April 2020',
        location: 'Regensburg, Bavaria, Germany',
        company: 'Dallmeier GmbH',
        position: 'Application Developer',
        description: [
            'Built modular dashboard visualizations',
            'Developed secure backup software module'
        ]
    },
    {
        dateStart: 'April 2020',
        dateEnd: 'January 2022',
        location: 'Cologne, North Rhine-Westphalia, Germany',
        company: 'Bright Future GmbH',
        position: 'Game Developer',
        description: [
            'Added features to Rail Nation MMO',
            'Ported game to Haxe for browser and mobile',
            'Built tools for faster content integration'
        ]
    },
    {
        dateStart: 'June 2022',
        dateEnd: 'June 2023',
        location: 'Cologne, North Rhine-Westphalia, Germany',
        company: 'AB Tasty',
        position: 'Support Engineer (Front-end)',
        description: [
            'Built A/B tests and personalization campaigns',
            'Estimated and scoped client requests',
            'Resolved platform technical issues'
        ]
    },
    {
        dateStart: 'June 2023',
        dateEnd: 'Present',
        location: 'Lindlar, North Rhine-Westphalia, Germany',
        company: 'Brück Electronic GmbH',
        position: 'Full-stack Web Developer',
        description: [
            'Built web apps for automation systems',
            'Developed real-time dashboards and schedulers',
            'Fixed critical bugs in Node.js systems'
        ]
    }
].reverse();
</script>

<style lang="scss" scoped>
.timeline-background {
    background-color: var(--surface);
    padding: 2rem 0;
}
</style>
