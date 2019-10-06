<template>
    <div class="my-4 black--text text-center d-flex justify-center align-center">
        <span class="font-tertiary font-weight-bold font-xxxl text-primary" v-if="withDecoration">&gt;</span>
        <h1 class="mt-3 mx-4 text-uppercase font-secondary display-1 font-weight-bold tracking-2"><slot></slot></h1>
        <span class="font-tertiary font-weight-bold font-xxxl text-primary" v-if="withDecoration">&lt;</span>
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