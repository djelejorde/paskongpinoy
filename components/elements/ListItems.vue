<template>
  <div>
      <span class="relative item"
        v-for="(i, index) in items"
        :key="index"
        :class="{'border-red': i === (3*i + 1), 'border-yellow': i % 2 === 0, 'border-blue': i % 3 === 0}"
      >{{ i.text }}</span>
  </div>
</template>

<script>
export default {
    name: 'ItemList',
    props: {
        items: {
            type: Array,
            default: () => {[]}
        }
    }
    
}
</script>

<style scoped>
.item:before {
    position: absolute;
    content: '';
    width: 0;  
    height: 0;
    border-style: solid;
    border-width: 50px 0 50px 100px;
    border-color: transparent transparent transparent #007bff;
}
</style>