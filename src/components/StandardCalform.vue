<script setup lang="ts">
import {computed, reactive, ref} from "vue";
let standardName = ref('');
let standardCalories = ref('');
defineProps({
  standardList: Array as () => any[]
})


const emit = defineEmits(['addStandardItemList'])


function addToStandardList () {
  if (standardName.value === '' || standardCalories.value === '') {
    return;
  }

   emit('addStandardItemList', {name: standardName.value, calories: standardCalories.value  });
  standardName.value = '';
  standardCalories.value = '';
}
</script>


<template>
  <section>
    <h3>Podaj nazwe oraz ilość kalori</h3>
    <button @click="$emit('toggleEdit')"> Zamknij</button>
    <div class="allRemoveBtn" >
    <div v-for="item in standardList"
         @click="$emit('removeItem', item)"
         class="removeBtn"
    >{{item.name}}</div>
    </div>
    <form @submit.prevent="addToStandardList()" >
      <input type="text" v-model="standardName" placeholder="Nazwa">
      <input type="text" v-model="standardCalories" placeholder="Kalorie">
      <button type="submit">Dodaj</button>
    </form>
  </section>

</template>

<style scoped>
section {
  width: 100% ;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: #9d9fa6 solid 1px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: rgba(119, 119, 119, 0.6) 2px 3px 2px 0;
  z-index: 10;
  background: beige;
}
form {

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: rgba(119, 119, 119, 0.6) 2px 3px 2px 0;
}
button {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: rgba(119, 119, 119, 0.6) 2px 3px 2px 0;
  cursor: pointer;
}
.removeBtn {
  background-color: #be0303;
  color: white;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: rgba(119, 119, 119, 0.6) 2px 3px 2px 0;
  cursor: pointer;
}
.allRemoveBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>