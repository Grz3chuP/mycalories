<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import StandardCalform from "@/components/StandardCalform.vue";




const openEdit = ref(false);
const standardCaloriesItems = ref([
  {
    id: 0,
    name: 'Kawa',
    calories: 50
},
  {
    id: 1,
    name: 'Obiad',
    calories: 400
  },
  {
    id: 2,
    name: 'cola',
    calories: 150
  },
]);
function addStandardItemList(item: any,cals: any) {
  console.log(item);
  console.log(cals);
  standardCaloriesItems.value.push({id: standardCaloriesItems.value.length, name: item.name, calories: item.calories});
}

function toggleEdit() {
  openEdit.value = !openEdit.value;
}
function removeItem(item: any) {
  console.log(item);
  standardCaloriesItems.value.splice(standardCaloriesItems.value.indexOf(item), 1);
}


</script>

<template>
  <StandardCalform v-if="openEdit"
                   @toggleEdit="toggleEdit"
                   :standardList="standardCaloriesItems"
                   @addStandardItemList="addStandardItemList"
                   @removeItem="removeItem"/>
<section >

  <div class="standardCaloriesFull"

       v-for="calorie in standardCaloriesItems"
        @click="$emit('addStandardItem', calorie.calories)">
        {{calorie.name}}
    <div class="caloriesNumber">{{calorie.calories}}</div>
  </div>



<button class="editButton" @click="toggleEdit"> Edytuj</button>

</section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: 5px;
}

.standardCaloriesFull {
  position: relative;
  background-color: #cbfc97;
  margin: 5px;
  border-radius: 5px;
  padding: 5px 5px 12px 5px;
  border: 1px solid gray;
  box-shadow: rgba(119, 119, 119, 0.6) 2px 3px 2px 0;
  border-bottom-right-radius: 50px 30px;
  cursor: pointer;
}
.editButton {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;

  border: 1px solid gray;
  box-shadow: rgba(119, 119, 119, 0.6) 2px 3px 2px 0;
  cursor: pointer;
}
.caloriesNumber {
  position: absolute;
  left: 50%;
  font-size: 0.7rem;
  background-color: #e0ac08;
  padding: 2px;
  border: grey dotted 1px;
  border-radius: 4px;
  border-top-left-radius: 20px 15px;
  box-shadow: rgba(128, 128, 128, 0.6) 0 1px 0 0;
}
</style>