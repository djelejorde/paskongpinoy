<template>
    <div class="my-4 black--text text-center">
        <span class="font-tertiary font-weight-bold" v-if="withDecoration">&gt;</span>
        <span class="mx-2 text-uppercase font-secondary"><slot></slot></span>
        <span class="font-tertiary font-weight-bold" v-if="withDecoration">&lt;</span>
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