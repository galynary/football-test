<script setup></script>
<template>
  <div class="scale">
    <p class="scale__label">Заповніть шкалу оцінювання</p>
    <div class="scale__content">
      <div class="scale__level">
        <p class="scale__level-name">недостатньо</p>
        <p class="scale__level-name">добре</p>
        <p class="scale__level-name">чудово</p>
      </div>
      <div class="scale__line"></div>
      <div class="scale__values">
        <input
          name="value"
          placeholder="0"
          v-model="name"
          class="scale__value"
        />
        <input
          name="value"
          placeholder="0"
          v-model="name"
          class="scale__value"
        />
      </div>
    </div>
  </div>
</template>
