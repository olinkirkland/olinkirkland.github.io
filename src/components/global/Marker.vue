<template>
    <div class="marker"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.marker {
    width: 3.2rem;
    height: 0.4rem;
    background-color: var(--accent-1);
    transition: width 0.3s;
}
</style>

<!-- Mobile queries -->
<style lang="scss" scoped>
@media (max-width: 768px) {
    .marker {
        width: 100%;
    }
}
</style>
