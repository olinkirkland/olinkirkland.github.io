<template>
    <div class="card">
        <header>
            <slot name="header"></slot>
        </header>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card {
    background-color: var(--background);
    border-radius: 7px;
    box-shadow: var(--shadow-md);
    padding: 2.4rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    > header {
        text-align: center;
        opacity: 0.2;
        :deep(i) {
            font-size: 2rem;
        }
    }
}
</style>
