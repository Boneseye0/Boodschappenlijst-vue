<script setup>
import { computed, } from 'vue';
import { useRouter } from 'vue-router';
import { deleteGrocery } from '../domains/groceries/components/store';


const props = defineProps({
    groceries: {
        type:   Array,
    }
})
const router = useRouter()

const remove = deleteGrocery

const total = computed(() => {
 return props.groceries.reduce((total, item) => total + item.price * item.count , 0)
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
        <td><button @click="router.push(`/edit/${item.id}`)">update</button></td>
        <td><button @click="remove(item.id)">verwijder</button></td>
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