<template>
    <div class="button-container">
        <button>
            <slot></slot>
        </button>
        <div class="button-shadow"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    class: {
        type: String,
        default: ''
    }
});

// TODO: Define the styles
// light, dark, accent-1, accent-2, accent-3, accent-4, hollow
</script>

<style lang="scss">
.button-container {
    position: relative;
    width: fit-content;
}

button {
    position: relative;
    z-index: 1;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    height: 3.2rem;
    padding: 0 1rem;
    color: var(--body);
    cursor: pointer;
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    transition: all 0.1s;
}

.button-shadow {
    position: absolute;
    top: 0.2rem;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

button:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.1rem);
}

button:active {
    transform: translateY(0.2rem);
    transition: unset;
}

// When button is active, the shadow should be slightly offset
button:active ~ .button-shadow {
    display: none;
}
</style>
