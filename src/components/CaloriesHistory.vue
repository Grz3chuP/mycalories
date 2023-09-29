<script setup lang="ts">

defineProps({
     calHistory: {
      type: Number
      },
      id: {
      type: Number
      }
});

function deleteHistoryItem(item: any, id: any) {
  console.log(item);
  console.log(id);

}
</script>

<template>
<div class="historyCalories" >
  {{calHistory}}
  <p @click="$emit('deleteHistoryItem', calHistory, id)">X</p>
</div>
</template>

<style scoped>
.historyCalories {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #a7b9fd;
  border: 1px solid gray;
  padding: 5px;
  border-top-right-radius: 20px 25px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 3px;
  margin-left: 10px;
  margin-top: 2px;
}
p {
  left: 100%;
  transform: translateX(-50%);
  top: -10%;
  position: absolute;
  margin: 0;
  padding: 0;

  cursor: pointer;
}
p:hover {
  color: red;
}
</style>