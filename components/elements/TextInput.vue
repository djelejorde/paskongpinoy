<template>
    <div class="border border-gray-400">
        <input class="pl-4 p-2 w-full font-body font-bold" :name="name" type="text" required :placeholder="placeholder">
    </div>
</template>
<script>
export default {
    name: 'TextInput',
    props: {
        placeholder: {
          type: String,
          default: ''
        },
        name: {
          type: String,
          default: ''
        }
    }
}
</script>

<style scoped>
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #726f72;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #726f72;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #726f72;
}

</style>