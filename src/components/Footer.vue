<template>
    <footer>
        <div class="footer-content">
            <h3>Olin Kirkland</h3>
            <p>
                A web developer living and working in Albany, NY with a passion
                for creating intuitive, functional websites and applications.
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

            <Button class="surface hollow">
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

<script setup lang="ts"></script>

<style lang="scss">
footer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: var(--body);
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
