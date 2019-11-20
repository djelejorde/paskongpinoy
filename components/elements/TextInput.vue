<template>
  <div>
    <div class="border" :class="{ 'border-red' : error, 'border-gray-400' : !error }">
      <input class="pl-4 p-2 w-full font-body font-bold"
        type="text"
        autocomplete="false"
        required
        :name="name" 
        :placeholder="placeholder"
        @change="error = false"
      >
    </div>
    <div class="text-sm text-red mt-1" v-if="error">Kailangan punan ang patlang na ito.</div>
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
      },
      hasError: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        error: false
      }
    },
    mounted () {
      this.error = this.hasError
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