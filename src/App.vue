<script setup>
import { ref } from 'vue';
import GroceriesTable from './components/GroceriesTable.vue';

const boodschappen = ref([
  {
  product     :   'Rijst',
  prijs       :   1.00,
  aantal      :   1
},
  {
  product     :   'Broccoli',
  prijs       :   0.99,
  aantal      :   1
},
  {
  product     :   'Koekjes',
  prijs       :   1.20,
  aantal      :   1
},  
  {
  product     :   'Noten',
  prijs       :   2.99,
  aantal      :   1
}])

</script>

<template>
<div>
<GroceriesTable :groceries="boodschappen" />
</div>
</template>

<style scoped>

</style>
