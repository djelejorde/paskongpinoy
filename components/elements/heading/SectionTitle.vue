<template>
    <div class="my-4 black--text text-center">
        <span v-if="withDecoration">&gt;</span>
        <span class="mx-2"><slot></slot></span>
        <span v-if="withDecoration">&lt;</span>
    </div>
</template>
<script>
export default {
    name: 'SectionTitle',
    props: {
        withDecoration: {
            type: Boolean,
            default: true
        }
    }
}
</script>