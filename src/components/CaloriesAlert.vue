<script setup lang="ts">



defineProps( {
     caloriesAlert: String,

});




</script>

<template>
<div class="caloriesAlert">
  <div  @click="$emit('zamknij')" class="closeTab">

    X
  </div>
  <p>
    {{ caloriesAlert }}
  </p>
   is not a number!!!

</div>
</template>

<style scoped>
.caloriesAlert{
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  max-width: 200px;
  height: auto;
  background-color: #9d9fa6;
  border: #1a1a1a solid 1px;
  border-radius: 10px;
}
p {
  padding: 0;
  margin: 10px 0;
  color: red;
  font-size: 1.5rem;
}
.closeTab {
  display: flex;
  justify-content: flex-end;
  padding-top: 5px;
  padding-right: 5px;
  cursor: pointer;
}


</style>