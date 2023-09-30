<template>
  <div class="caloriesFull">
Liczba kalori full {{name}}
  </div>
  <CaloriesStandards @addStandardItem="addToCalories"/>
  <form @submit.prevent="newCalories">
  <input v-model="nowaLiczbaCalori"
         placeholder="Podaj Liczbe kalori"
          @input="validateNumericInput"
  >
   <button class="addButton" type="submit">Add</button>

  </form>
 <h2>{{totalCalories}}</h2>
  <div class="historyFull">
  <CaloriesHistory v-for="calorie in caloriesHistory"
                   :calHistory="calorie" :id="caloriesHistory.indexOf(calorie)"
                   :key="caloriesHistory.indexOf(calorie)"
                    @deleteHistoryItem="deleteHistoryItem"
  />
  </div>
  <CaloriesAlert v-if="wrongInput" :caloriesAlert="wrongInput" @zamknij="wrongInput = ''"/>
</template>


<script setup lang="ts">
import {ref, computed} from "vue";
import CaloriesAlert from "@/components/CaloriesAlert.vue";
import CaloriesHistory from "@/components/CaloriesHistory.vue";
import CaloriesStandards from "@/components/CaloriesStandards.vue";
import * as events from "events";

defineProps({

  name: String,
})
let caloriesHistory = ref([]);
let totalCalories = ref(0);
let nowaLiczbaCalori = ref('');
let wrongInput = ref('');
function newCalories() {
  if (nowaLiczbaCalori.value === '') {
    return;
  }

  caloriesHistory.value.push(nowaLiczbaCalori.value);
  totalCalories.value = parseInt(nowaLiczbaCalori.value)  + parseInt(totalCalories.value);
  nowaLiczbaCalori.value = '';
  wrongInput.value = '';
}
function addToCalories (item: number) {
  caloriesHistory.value.push(item);
  totalCalories.value = parseInt(item)  + parseInt(totalCalories.value);
}
function validateNumericInput() {
  const testValue = nowaLiczbaCalori.value;
  nowaLiczbaCalori.value = nowaLiczbaCalori.value.replace(/[^0-9]/g, '');
  if (testValue !== nowaLiczbaCalori.value) {

    wrongInput.value = testValue ;
  }
}
function deleteHistoryItem(item: any, id: any) {
  console.log(item);
  console.log(id);
  caloriesHistory.value.splice(id, 1);
  totalCalories.value = parseInt(totalCalories.value) - parseInt(item);
}
</script>



<style scoped>
.caloriesFull {
padding: 10px 0;
  background-color: #d1d2d3;
  margin: 5px;
  border: 1px solid gray;
  box-shadow: rgba(157, 159, 166, 0.8) 2px 5px 2px 0;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;

}
.addButton {
  margin: 5px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid gray;
  background-color: rgb(255,255,255);
  font-size: 1.1rem;
  box-shadow: rgba(128,128,128, 0.3) 1px 3px 2px 1px ;
}
.addButton:hover {
  background-color: gray;
  color: white;
}
input {
  padding: 0.2rem;
  border-radius: 4px;
  box-shadow: rgba(128,128,128, 0.3) 1px 3px 2px 1px ;
  list-style: none;
  border: 1px solid gray;
  font-size: 1.1rem;
}
.historyFull {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-top: #9d9fa6 solid 1px;
  padding-top: 4px;


}
</style>