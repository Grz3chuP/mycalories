<template>
  <div id="container">

    <strong>{{ name }}</strong>
   <MyCalories name="test"/>
  </div>
</template>

<script setup lang="ts">

import MyCalories from "@/components/MyCalories.vue";

defineProps({
  name: String,
});






</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;



}


#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
