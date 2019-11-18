<template>
    <div class="w-full relative justify-center">
        <div class="top-banderitas" :style="'background-image: url(\'' + banderitas + '\')'"></div>

        <h1 class="text-center mt-8 text-6xl self-center flex-1 text-orange font-tob" :title-class="titleClass">
            <slot> </slot>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'SubHeaderTitle',
    props: {
        titleClass: {
            type: String,
            default: ''
        }
    },
    computed: {
        banderitas () {
            return require('@/static/banderitas_top.png')
        }
    }
}
</script>

<style scoped>
.top-banderitas {
    height: 60px;
    background-size: contain;
    background-position-x: 50%;
}
</style>