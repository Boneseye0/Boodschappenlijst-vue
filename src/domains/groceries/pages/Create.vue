<script setup>
import { ref } from 'vue';
import GroceryForm from '../components/GroceryForm.vue';
import { addGrocery, nextId } from '../components/store';


const grocery = ref({
    id:         nextId,
    product:    '',
    price:      0,
    count:      0
});

const handleSubmit = (newGrocery) => {
    addGrocery(newGrocery)
}

</script>

<template>

<div>
    <GroceryForm @submit="handleSubmit" :grocery="grocery" />
</div>    
</template>