<template>
    <section>
        <h2>
            <strong class="color-accent-4">Skills</strong> and Proficiencies
        </h2>
        <p>
            I have
            <strong class="color-accent-4">{{ yearsSince2015 }} years</strong>
            of professional software development experience.
        </p>
        <ul class="skills-list">
            <li v-for="skill in skills">
                <span>{{ skill }}</span>
            </li>
        </ul>
        <ul class="certificates-list">
            <li v-for="certificate in certificates" :key="certificate.name">
                <Card @click="onClickCertificate(certificate)">
                    <template #header>
                        <div class="flex">
                            <img
                                :src="`/assets/images/certificate-badges/${certificate.badgeIcon}`"
                                alt="Certificate Badge"
                            />
                            <p>
                                <strong>{{ certificate.name }}</strong>
                            </p>
                        </div>
                    </template>
                    <template #content>
                        <h6>
                            {{ months[certificate.date.month] }}
                            {{ certificate.date.year }}
                        </h6>
                    </template>
                </Card>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
const yearsSince2015 = new Date().getFullYear() - 2015;
const skills = [
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'React',
    'Node.js',
    'Express.js',
    'HTML5',
    'CSS3',
    'SCSS',
    'Redis',
    'Mongo DB',
    'THREE.js',
    'Tailwind',
    'Bootstrap',
    'Git',
    'XML',
    'JSON',
    'Figma',
    'English',
    'German',
    'Haxe',
    'ActionScript',
    'Apache Flex',
    'Adobe Animate'
];
const certificates = [
    {
        badgeIcon: 'udemy.png',
        name: 'Build Responsive Real-World Websites with HTML and CSS',
        date: {
            month: 0,
            year: 2022
        },
        url: 'https://www.udemy.com/certificate/UC-90b286ba-f59a-48c5-90e1-b7c674c70802/'
    },
    {
        badgeIcon: 'udemy.png',
        name: 'Tailwind CSS: A Modern Way to Build Websites Using CSS',
        date: {
            month: 0,
            year: 2022
        },
        url: 'https://www.udemy.com/certificate/UC-a8aed92b-dba2-4c31-b6ef-62059fe61d3d/'
    },
    {
        badgeIcon: 'udemy.png',
        name: 'Figma - UI/UX Design Essential Training',
        date: {
            month: 11,
            year: 2021
        },
        url: 'https://www.udemy.com/certificate/UC-c68c1add-dfab-425e-afa5-d141a12b7bcd/'
    },
    {
        badgeIcon: 'udemy.png',
        name: 'The Git & Github Bootcamp',
        date: {
            month: 10,
            year: 2021
        },
        url: 'https://www.udemy.com/certificate/UC-313b617c-5726-42e5-98cd-d2022655a752/'
    },
    {
        badgeIcon: 'udemy.png',
        name: 'Understanding TypeScript - 2022 Edition',
        date: {
            month: 10,
            year: 2021
        },
        url: 'https://www.udemy.com/certificate/UC-9be73abd-906e-4bd2-bb7b-fbc110813e93/'
    },
    {
        badgeIcon: 'udemy.png',
        name: 'The Bootstrap 4 Bootcamp',
        date: {
            month: 2,
            year: 2022
        },
        url: 'https://www.udemy.com/certificate/UC-333d8dd1-c9d9-4a23-a6a6-7b8e17daff08/'
    },
    {
        badgeIcon: 'wbs.png',
        name: 'Full Stack Web & App Development Bootcamp',
        date: {
            month: 4,
            year: 2022
        },
        file: 'wbs-fullstack-certificate.pdf'
    },
    {
        badgeIcon: 'abt.png',
        name: 'AB Tasty User Essentials',
        date: {
            month: 7,
            year: 2022
        },
        file: 'abt-user-essentials.pdf'
    },
    {
        badgeIcon: 'udemy.png',
        name: 'Vue - The Complete Guide (incl. Router & Composition API)',
        date: {
            month: 6,
            year: 2023
        },
        url: 'https://www.udemy.com/certificate/UC-a00238ce-da76-4ebd-812e-69eb91a8e104/'
    }
];
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function onClickCertificate(certificate: { url?: string; file?: string }) {
    // Either open the URL in a new tab or download the file
    if (certificate.url) {
        window.open(certificate.url, '_blank');
    } else if (certificate.file) {
        const link = document.createElement('a');
        link.href = `/certificates/${certificate.file}`;
        link.download = certificate.file;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    text-align: center;

    h2 {
        text-align: center;
        margin: 0 auto;
        max-width: 64rem;
    }
}

ul.skills-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    list-style: none;
    padding: 0;

    li {
        background-color: var(--accent-2);
        border-radius: 99px;
        padding: 0.6rem 1.2rem;
    }
}

ul.certificates-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 1rem;

    > li .card {
        position: relative;
        cursor: pointer;
        height: 100%;
        display: flex;
        flex-direction: column;
        > header {
            > div {
                display: flex;
                align-items: center;
                text-align: left;
                gap: 1rem;
                > img {
                    height: 3.2rem;
                    min-width: 3.2rem;
                    object-fit: contain;
                }
            }
        }
        :deep(.content) {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            opacity: 0.4;
        }
    }
}
</style>
