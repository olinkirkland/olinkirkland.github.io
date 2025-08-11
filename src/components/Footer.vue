<template>
    <footer>
        <div class="footer-content">
            <h3>Olin Kirkland</h3>
            <p>
                Living and working in Albany, New York. I write full-stack code
                for web-apps and games.
            </p>

            <!-- Social links -->
            <!-- Github, LinkedIn, Email -->
            <div class="flex">
                <a href="https://github.com/olinkirkland" target="_blank">
                    <i class="icon fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/olin-kirkland" target="_blank">
                    <i class="icon fab fa-linkedin"></i>
                </a>
            </div>

            <Button class="dark" @click="$emit('scrollToTop')">
                <i class="icon fas fa-arrow-up"></i>
                <span>Back to top</span>
            </Button>
        </div>
        <div class="footer-content">
            <h3>Contact</h3>
            <p>
                Have a project in mind? Let's connect and bring your ideas to
                life.
            </p>
        </div>
    </footer>

    <!-- Copyright -->
    <div class="copyright">
        <p>
            Copyright &copy; {{ new Date().getFullYear() }} Olin Kirkland. All
            Rights Reserved.
        </p>
    </div>
</template>

<script setup lang="ts">
defineEmits<{ (e: 'scrollToTop'): void }>();
</script>

<style lang="scss">
footer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: var(--surface-inverted);
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    color: var(--surface);
}

.copyright {
    display: flex;
    justify-content: center;
    background-color: var(--accent-1);
    padding: 1rem;
    > p {
        font-size: 1.2rem;
    }
}

a i {
    font-size: 2.4rem;
    color: var(--surface);
}
</style>
