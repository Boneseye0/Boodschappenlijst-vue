<script setup>
import { ref } from 'vue'

const props = defineProps({
    grocery: {type: Object,}    
});

const newGrocery = ref({...props.grocery});

const emit = defineEmits([
    'submit'
]);

const submit = () => {
    emit('submit', newGrocery.value)
};

</script>


<template>
    <div>
        <h1>
            Nieuwe boodschappen
        </h1>
        <table>
            <thead>
                <tr>
                <td>
                    Naam
                </td>
                <td>
                    Prijs
                </td>
                <td>
                    Aantal
                </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" placeholder="Product naam" v-model="newGrocery.product"></td>
                    <td><input type="number" placeholder="0.00" v-model="newGrocery.price"></td>
                    <td><input type="number" placeholder="0" v-model="newGrocery.count"></td>
                    <td>id:{{ newGrocery.id }}</td>
                </tr>
                <tr>
                    <td>
                        <button @click="submit">Opslaan</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>