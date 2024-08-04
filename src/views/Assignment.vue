<script setup>
  import { ref } from "vue";
  import Sidebar from "../components/Sidebar.vue";
  import Content from "../components/Assignment/Content.vue"
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="bg-100 col-5 col-lg-3 col-xl-2">
        <Sidebar></Sidebar>
      </div>
      <div class="col">
        <Content></Content>
      </div>
    </div>
  </div>
</template>

<style scoped></style>