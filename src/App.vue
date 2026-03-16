<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <nav>
    <RouterLink to="/">Overview</RouterLink> | 
    <RouterLink to="/create">Create</RouterLink> | 
    <RouterLink to="/edit/:id">Edit</RouterLink>
  </nav>
<div>
  <RouterView/>
</div>
</template>

<style scoped>

</style>
