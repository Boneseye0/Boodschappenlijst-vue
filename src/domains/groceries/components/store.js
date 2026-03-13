import { ref, computed } from 'vue';

const groceries = ref([
  {
  product   :   'Rijst',
  price     :   1.00,
  count     :   1
},
  {
  product   :   'Broccoli',
  price     :   0.99,
  count     :   1
},
  {
  product   :   'Koekjes',
  price     :   1.20,
  count     :   1
},  
  {
  product   :   'Noten',
  price     :   2.99,
  count     :   0
}]);

export const getAllGroceries = computed(() => groceries.value);
export const getGroceryByProduct = (product) => computed(() => groceries.value.find(grocery => grocery.product == product));

export const addGrocery = (grocery) => groceries.value.push(grocery);