<script setup>
import GroceryForm from '../components/GroceryForm.vue';

const grocery = {
    product:    '',
    price:      0,
    count:      0
};

</script>

<template>
<div>
    <GroceryForm :grocery />
    </div>    
</template>