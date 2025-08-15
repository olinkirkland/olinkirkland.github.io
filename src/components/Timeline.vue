<template>
    <div class="timeline-background">
        <Wave foregroundColor="surface" line-color="surface" position="top" />
        <section>
            <div>
                <TimelineBlock
                    v-for="(entry, index) in timelineEntries"
                    :index="index"
                    :dateStart="entry.dateStart"
                    :dateEnd="entry.dateEnd"
                    :location="entry.location"
                    :company="entry.company"
                    :position="entry.position"
                    :description="entry.description"
                    :link="entry.link"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import TimelineBlock from './TimelineBlock.vue';
import Wave from './Wave.vue';

const timelineEntries = [
    {
        dateStart: 'September 2015',
        dateEnd: 'May 2018',
        location: 'Houston, United States',
        company: 'Paul Bernhard Exhibits',
        position: 'Application Developer',
        description: [
            'Created museum touchscreen apps and kiosks',
            'Procured requirements from museum staff'
        ],
        link: 'https://www.pbe.design/'
    },
    {
        dateStart: 'May 2018',
        dateEnd: 'April 2020',
        location: 'Regensburg, Germany',
        company: 'Dallmeier',
        position: 'Application Developer',
        description: [
            'Built modular dashboard visualizations',
            'Developed secure backup software module'
        ],
        link: 'https://www.dallmeier.com/'
    },
    {
        dateStart: 'April 2020',
        dateEnd: 'January 2022',
        location: 'Cologne, Germany',
        company: 'Bright Future',
        position: 'Game Developer',
        description: [
            'Developed features for a live-service game',
            'Ported game to Haxe for browser and mobile'
        ],
        link: 'https://www.traviangames.com/en/bright-future'
    },
    {
        dateStart: 'June 2022',
        dateEnd: 'June 2023',
        location: 'Cologne, Germany',
        company: 'AB Tasty',
        position: 'Front-end Engineer',
        description: [
            'Built A/B tests and personalization campaigns',
            'Estimated and scoped client requests'
        ],
        link: 'https://www.abtasty.com/'
    },
    {
        dateStart: 'June 2023',
        dateEnd: 'Present',
        location: 'Lindlar, Germany',
        company: 'Brück Electronic',
        position: 'Full-stack Web Developer',
        description: [
            'Developed real-time dashboards and schedulers',
            'Fixed critical bugs in legacy systems'
        ],
        link: 'https://www.beg-luxomat.com/'
    }
].reverse();
</script>

<style lang="scss" scoped>
.timeline-background {
    background-color: var(--surface);
    padding: 2rem 0;
    margin-top: 4rem;
    padding-bottom: 4rem;
}

section {
    display: flex;
    justify-content: center;
}
</style>
