<script setup>
import { ref } from 'vue';
import { getGroceryById, updateGrocery } from '../components/store';
import { useRoute } from 'vue-router';
import GroceryForm from '../components/GroceryForm.vue';

const $route = useRoute()

const groceryId = $route.params.id
const grocery = ref(getGroceryById(groceryId))

const handleSubmit = (modifiedGrocery) => {
    updateGrocery(modifiedGrocery)
}




// const editgrocery = (groceryId) = ref({getGroceryById})
</script>

<template>

<h2>grocery id {{ $route.params.id }}</h2>
<GroceryForm @submit="handleSubmit" :grocery />
</template>