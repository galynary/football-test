<template>
  <div class="wrap-football-program">
    <div class="football football-program">
      <!--Меню-->
      <Sidebar />
      <div class="football__wrap-content">
        <div class="football__content">
          <!--Хедер-->
          <Header />
          <!--Форма-->
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import Form from "./views/Form.vue";
</script>
