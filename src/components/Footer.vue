<template>
    <footer>
        <Wave
            foreground-color="surface-inverted"
            line-color="surface-inverted"
            position="top"
        />
        <section>
            <div class="footer-content">
                <h3>About Me</h3>
                <p>
                    I write full-stack code for web-apps and games in Albany,
                    New York.
                </p>

                <Button class="dark" @click="$emit('scrollToTop')">
                    <i class="fas fa-arrow-up"></i>
                    <span>Back to top</span>
                </Button>
            </div>

            <!-- <div class="footer-content"></div> -->
            <div class="footer-content">
                <h3>Projects</h3>
                <ul>
                    <li>
                        <a
                            class="link"
                            href="https://scoundry.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Scoundry
                        </a>
                    </li>

                    <li>
                        <a
                            class="link"
                            href="https://olinkirk.land/grimoire"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Grimoire
                        </a>
                    </li>

                    <li>
                        <a
                            class="link"
                            href="https://olinkirk.land/lootdragon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Lootdragon
                        </a>
                    </li>

                    <li>
                        <a
                            class="link"
                            href="https://olinkirk.land/scribbles"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Scribbles
                        </a>
                    </li>

                    <li>
                        <a
                            class="link"
                            href="https://github.com/olinkirkland/realms"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Realms
                        </a>
                    </li>

                    <li>
                        <a
                            class="link"
                            href="https://github.com/olinkirkland/online-in-the-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Online in the Dark
                        </a>
                    </li>

                    <li>
                        <a
                            class="link"
                            href="https://olinkirk.land/realm-writer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Realm Writer
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer-content">
                <h3>Get in touch</h3>
                <p>
                    Have a project in mind? Let's connect and bring your ideas
                    to life.
                </p>

                <a class="link" href="mailto:me@olinkirk.land">
                    me@olinkirk.land
                </a>

                <!-- Social links -->
                <div class="flex">
                    <a
                        class="icon"
                        href="https://github.com/olinkirkland"
                        target="_blank"
                    >
                        <i class="icon fab fa-github"></i>
                    </a>
                    <a
                        class="icon"
                        href="https://linkedin.com/in/olin-kirkland"
                        target="_blank"
                    >
                        <i class="icon fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
    </footer>

    <!-- Copyright -->
    <div class="copyright">
        <section>
            <p>
                <span
                    >Copyright &copy; {{ new Date().getFullYear() }} Olin
                    Kirkland.</span
                >
                <span>All Rights Reserved.</span>
            </p>
        </section>
    </div>
</template>

<script setup lang="ts">
import Wave from './Wave.vue';

defineEmits<{ (e: 'scrollToTop'): void }>();
</script>

<style lang="scss" scoped>
footer {
    position: relative;
    background-color: var(--surface-inverted);
    margin-top: 8rem;
}

footer section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 4rem 2rem;
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    color: var(--surface);
}

.footer-content ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
}

.copyright {
    background-color: var(--accent-1);
    padding: 0.8rem;

    section {
        padding: 0;

        > p {
            display: flex;
            justify-content: center;
            gap: 0.4rem;
        }
    }
}

.icon {
    color: var(--surface);
    font-size: 2.4rem;
}
</style>

<!-- Mobile queries -->
<style lang="scss" scoped>
@media (max-width: 768px) {
    footer section {
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    .copyright section {
        p {
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>
