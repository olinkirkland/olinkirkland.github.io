<template>
    <div class="contact-banner">
        <section>
            <div class="flex center">
                <Button
                    @click="downloadResume"
                    class="accent-1 full-width-mobile"
                >
                    <i class="fas fa-arrow-down"></i>
                    <span>Download my Resume</span>
                </Button>

                <Button @click="onClickLinkedin" class="full-width-mobile">
                    <i class="fab fa-linkedin-in"></i>
                    <span>Connect on LinkedIn</span>
                </Button>

                <Button @click="onClickEmail" class="full-width-mobile">
                    <i class="fas fa-paper-plane"></i>
                    <span>Contact Me</span>
                </Button>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import downloadResume from '../download-resume';

function onClickLinkedin() {
    window.open('https://www.linkedin.com/in/olin-kirkland', '_blank');
}

function onClickEmail() {
    window.location.href = 'mailto:me@olinkirk.land';
}
</script>

<style lang="scss" scoped>
.contact-banner {
    background-color: var(--accent-4);
    padding: 2.4rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25),
        inset 0 -5px 15px rgba(0, 0, 0, 0.25);

    section {
        padding: 0;
        display: flex;
        justify-content: center;
        > div {
            max-width: 64rem;
        }
    }
}
</style>

<!-- Mobile queries -->
<style lang="scss" scoped>
@media (max-width: 768px) {
    .flex {
        width: 100%;
        flex-direction: column;
        max-width: unset;
    }
}
</style>
