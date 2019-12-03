<template>
    <button :disabled="disabled" @click="click" class="cursor-pointer bg-green text-white px-6 py-3 font-body font-bold tracking-wide w-full lg:w-auto">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'PrimaryButton',
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        click () {
            this.$emit('click', true)
        }
    }
}
</script>