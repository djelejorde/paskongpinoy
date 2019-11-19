<template>
    <div class="w-full flex justify-center">
        <div class="left-banderitas w-1/4 lg:w-1/6 self-start">
            <img :src="banderitas" width="100%"/>
        </div>

        <h1 class="text-center self-center flex-1 text-orange text-3xl lg:text-6xl font-tob mt-10 lg:mt-0">
            <slot></slot>
        </h1>
        
        <div class="right-banderitas w-1/4 lg:w-1/6 self-start"> 
            <img :src="banderitas" width="100%"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderTitle',
    props: {
        title: {
            type: String,
            default: 'Header Title Here'
        }
    },
    computed: {
        banderitas () {
            return require('@/static/banderitas_left.png')
        }
    }
}
</script>

<style scoped>
.right-banderitas {
    transform: scaleX(-1)
}
</style>