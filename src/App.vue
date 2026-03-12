<script setup>

import { computed, ref } from 'vue';

const groceries = ref([
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

const computedSubtotaal = computed(() => { 
  return groceries.value.map(item => item.prijs * item.aantal)
})

const computedTotal = computed(() => {
 return computedSubtotaal.value.reduce((total, num) => total + num , 0)
})

</script>

<template>
<div>
  <table>
    <thead>
      <tr>
        <td>Product</td><td>prijs</td><td>aantal</td><td>subtotaal</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in groceries" :key="index">
        <td>{{ item.product }}</td><td class="money">€{{ item.prijs.toFixed(2) }}</td><td><input type="number" v-model="item.aantal" /></td><td class="money">€{{ computedSubtotaal[index].toFixed(2) }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">totaal</td><td class="money">€{{ computedTotal.toFixed(2) }}</td>
      </tr>
    </tfoot>
  </table>
</div>
</template>

<style scoped>

</style>
