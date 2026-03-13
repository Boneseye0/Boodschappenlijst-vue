<script setup>
import { ref } from 'vue';
import GroceriesTable from '../../../components/GroceriesTable.vue';

const groceries = ref([
  {
  product     :   'Rijst',
  price       :   1.00,
  count      :   1
},
  {
  product     :   'Broccoli',
  price       :   0.99,
  count      :   1
},
  {
  product     :   'Koekjes',
  price       :   1.20,
  count      :   1
},  
  {
  product     :   'Noten',
  price       :   2.99,
  count      :   1
}])

</script>

<template>
    <div>
        <GroceriesTable :groceries />
    </div>
</template>