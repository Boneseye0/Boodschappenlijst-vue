<script setup>
import { computed, } from 'vue';

const props = defineProps({
    groceries: {
        type:   Array,
    }
})

const total = computed(() => {
  let subTotal = props.groceries.map(groceries => groceries.price * groceries.count)
 return subTotal.reduce((total, num) => total + num , 0)
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
        <td>{{ item.product }}</td>
        <td class="money">€{{ item.price.toFixed(2) }}</td>
        <td><input type="number" v-model="item.count" /></td>
        <td class="money">€{{ (item.price * item.count).toFixed(2) }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">totaal</td><td class="money">€{{ total.toFixed(2) }}</td>
      </tr>
    </tfoot>
  </table>
</div>
</template>