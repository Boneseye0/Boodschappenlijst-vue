import { ref, computed } from 'vue';

const groceries = ref([
  {
    id        :   0,
    product   :   'Rijst',
    price     :   1.00,
    count     :   1
},
  {
    id        :   1,
    product   :   'Broccoli',
    price     :   0.99,
    count     :   1
},
  {
    id        :   2,
    product   :   'Koekjes',
    price     :   1.20,
    count     :   1
},  
  {
    id        :   3,
    product   :   'Noten',
    price     :   2.99,
    count     :   0
}]);

const id = ref(4)
export const nextId = computed(() => id)
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

export const addGrocery = ((grocery) => {
  groceries.value.push(grocery);
  id.value++});

export const updateGrocery = (grocery) =>{
  const groceriesIndex = groceries.value.findIndex(item => item.id == grocery.id)
  if (groceriesIndex <0) return console.log("id not found")
  groceries.value.splice(groceriesIndex, 1 , grocery)
}

export const deleteGrocery = (id) => {
  const groceriesIndex = groceries.value.findIndex(item => item.id == id)
  if (groceriesIndex <0) return console.log("id not found")
  groceries.value.splice(groceriesIndex, 1)
}