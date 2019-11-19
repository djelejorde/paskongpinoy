<template>
    <div class="w-full relative justify-center">
        <div class="top-banderitas" :style="'background-image: url(\'' + banderitas + '\')'"></div>

        <h1 class="text-center text-3xl lg:text-6xl self-center flex-1 text-orange font-tob mt-10 px-6 lg:px-0" :title-class="titleClass">
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
    height: 25px;
    background-size: contain;
    background-position-x: 50%;
}

@media screen and (min-width: 1024px) {   
    .top-banderitas {
        height: 60px;
    }
}
</style>