<script setup>
import { computed, } from 'vue';

const props = defineProps({
    groceries: {
        type:   Array,
        default: () => [{
            product :   '',
            prijs   :   Number(0),
            aantal  :   Number(0)
        }]
    }
})
   

const computedSubtotaal = computed(() => { 
  return props.groceries.map(item => item.prijs * item.aantal)
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
      <tr v-for="(item, index) in props.groceries" :key="index">
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