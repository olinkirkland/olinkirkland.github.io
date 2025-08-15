<template>
    <Card>
        <template #header>
            <div class="flex spread">
                <h3>{{ project.name }}</h3>
                <h3 class="muted">{{ project.year }}</h3>
            </div>
        </template>

        <template #content>
            <ul class="tags">
                <li v-for="tag in project.tags" :key="tag">
                    <img :src="getTagImage(tag)" :alt="getTagImage(tag)" />
                </li>
            </ul>
            <p v-html="project.description"></p>
            <div class="button-container">
                <Button
                    v-if="project.linkType === 'demo'"
                    @click="onClickProject"
                >
                    <i class="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                </Button>
                <Button v-else @click="onClickProject">
                    <i class="fab fa-github"></i>
                    <span>Source Code</span>
                </Button>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
const props = defineProps<{
    project: {
        name: string;
        description: string;
        tags: string[];
        link: string;
        linkType: string;
        images: string[];
        year: number;
    };
}>();

function onClickProject() {
    window.open(props.project.link, '_blank');
}

function getTagImage(tag: string) {
    return `/assets/images/stack-badges/${tag}.svg`;
}
</script>

<style lang="scss" scoped>
:deep(.content) {
    flex: 1;
    display: flex;
    flex-direction: column;
    ul.tags {
        padding: 1rem 0;
    }
}

ul.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    > li {
        height: 2rem;
        overflow: hidden;
        border-radius: 99px;
        img {
            height: 2rem;
        }
    }
}

.button-container {
    // border: 1px solid red;
    flex: 1;
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
</style>
