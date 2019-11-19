<template>
  <div>
      <div class="relative item pl-10 my-5 font-bold font-body text-lg"
        v-for="(i, index) in items"
        :key="index"
        v-html="i.text"
      ></div>
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
    left: 0;
    content: '';
    width: 0;  
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 20px;
}

.item:nth-child(3n+1):before { border-color: transparent transparent transparent #cc3c49; }
.item:nth-child(3n+2):before { border-color: transparent transparent transparent #f9bb31; }
.item:nth-child(3n):before { border-color: transparent transparent transparent #354da1; }
</style>