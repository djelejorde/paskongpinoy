<template>
    <button @click="click" class="bg-green text-white px-6 py-3">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'PrimaryButton',
    methods: {
        click () {
            this.$emit('click', true)
        }
    }
}
</script>