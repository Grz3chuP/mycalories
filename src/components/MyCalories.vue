<template>
  <div class="caloriesFull">
Liczba kalori full {{name}}
  </div>
  <form @submit.prevent="newCalories">
  <input v-model="nowaLiczbaCalori"
         placeholder="Podaj Liczbe kalori"
          @input="validateNumericInput"
  >
   <button class="addButton" type="submit">Add</button>

  </form>
  {{calories}}
  <CaloriesAlert v-if="wrongInput" :caloriesAlert="wrongInput" @zamknij="wrongInput = ''"/>
</template>


<script setup lang="ts">
import {ref, computed} from "vue";
import CaloriesAlert from "@/components/CaloriesAlert.vue";

defineProps({

  name: String,
})
let calories = ref(0);
let nowaLiczbaCalori = ref('');
let wrongInput = ref('');
function newCalories() {
  if (nowaLiczbaCalori.value === '') {
    return;
  }
  calories.value = nowaLiczbaCalori.value;
  nowaLiczbaCalori.value = '';
  wrongInput.value = '';
}
function validateNumericInput() {
  const testValue = nowaLiczbaCalori.value;
  console.log(testValue);
  nowaLiczbaCalori.value = nowaLiczbaCalori.value.replace(/[^0-9]/g, '');
  console.log("bez liter" + nowaLiczbaCalori.value);
  if (testValue !== nowaLiczbaCalori.value) {

    wrongInput.value = testValue ;
  }
}
</script>



<style scoped>
.caloriesFull {
  background-color: antiquewhite;
  margin: 5px;
}
</style>