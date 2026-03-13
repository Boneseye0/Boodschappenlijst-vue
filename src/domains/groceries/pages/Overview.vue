<script setup>
import { ref } from 'vue';
import GroceriesTable from '../../../components/GroceriesTable.vue';
import { getAllGroceries } from '../components/store';

const groceries = getAllGroceries

</script>

<template>
    <div>
        <GroceriesTable :groceries />
    </div>
</template>