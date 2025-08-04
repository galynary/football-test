<script setup>
import VueSelect from "vue3-select-component";

import TrainingDescription from "../components/TrainingDescrip.vue";
import RatingScale from "../components/RatingScale.vue";
import FormInputPlayer from "../components/FormInputPlayer.vue";
import PlayerCharacteristics from "../components/PlayerCharacteristics.vue";
import VideoLinks from "../components/VideoLinks.vue";
import FilesLinks from "../components/FilesLinks.vue";
import { ref } from "vue";

const selectedType = ref("");
const optionsType = [
  { label: "Тестування", value: "" },
  { label: "Норматив", value: "normative" },
  { label: "Вправа", value: "exercise" },
  { label: "Завдання", value: "task" },
];

const selectedAgeCategory = ref("twelve");
const optionsAgeCategory = [
  { label: "A 12p.", value: "twelve" },
  { label: "B 16p.", value: "sixteen" },
  { label: "C 18p.", value: "eighteen" },
  { label: "D 20p.", value: "twenty" },
];

const selectedScale = ref("");
const optionsScale = [
  { label: "Кількість", value: "" },
  { label: "4 бали", value: "four" },
  { label: "6 балів", value: "six" },
  { label: "8 балів", value: "eight" },
  { label: "10 балів", value: "ten" },
];

const selectedMinutes = ref("fifteen");
const optionsMinutes = [
  { label: "5хв", value: "five" },
  { label: "10хв", value: "ten" },
  { label: "15хв", value: "fifteen" },
  { label: "20хв", value: "twenty" },
  { label: "30хв", value: "thirty" },
];

const selectedNormatName = ref("scoring");
const optionsNormatName = [
  { label: "Набивання м'яча", value: "scoring" },
  { label: "Човниковий біг ", value: "shuttle" },
  { label: "Ведення м’яча на час", value: "dribbling" },
  { label: "Удар по мішенях", value: "shock" },
  { label: "Передача на точність", value: "transfer" },
];

const selectedProgCategory = ref("twelve");
const optionsProgCategory = [
  { label: "Програма для A 12p.", value: "twelve" },
  { label: "Програма для B 16p.", value: "sixteen" },
  { label: "Програма для C 18p.", value: "eighteen" },
  { label: "Програма для D 20p.", value: "twenty" },
];
</script>
<template>
  <form class="form">
    <div class="form__container">
      <div class="form__content">
        <!-- Обрати завдання вік -->
        <div class="form__block">
          <!-- Обрати завдання  -->
          <div class="form__select">
            <p class="form__label">Оберіть(норматив, вправа чи завдання)</p>
            <VueSelect
              id="type"
              v-model="selectedType"
              :options="optionsType"
              class="select"
              :class="{ 'has-value': selectedType }"
            />
          </div>
          <!-- Обрати вікову категорію  -->
          <div class="form__select">
            <p class="form__label">Оберіть вікову категорію</p>
            <VueSelect
              id="age"
              v-model="selectedAgeCategory"
              :options="optionsAgeCategory"
              class="select"
              :class="{ 'has-value': selectedType }"
            />
          </div>
          <!-- Обрати шкалу оцінювання  -->
          <div class="form__select">
            <p class="form__label">"Оберіть шкалу оцнювання</p>
            <VueSelect
              id="scale"
              v-model="selectedScale"
              :options="optionsScale"
              class="select"
              :class="{ 'has-value': selectedType }"
            />
          </div>
        </div>
        <!-- Обрати програму -->
        <div class="form__block">
          <div class="form__select">
            <p class="form__label">
              Введіть власну назву або оберіть зі списку
            </p>
            <VueSelect
              id="name"
              v-model="selectedNormatName"
              :options="optionsNormatName"
              class="select"
              :class="{ 'has-value': selectedType }"
            />
          </div>
          <div class="form__select">
            <p class="form__label">Оберіть програму в яку буде включено</p>
            <VueSelect
              id="program"
              v-model="selectedProgCategory"
              :options="optionsProgCategory"
              class="select"
              :class="{ 'has-value': selectedType }"
            />
          </div>
          <RatingScale />
        </div>
        <!-- Опис завдання -->
        <div class="form__block form-block">
          <div class="form__select">
            <p class="form__label minutes">
              Вкажіть тривалість у хв. для елементу
            </p>
            <VueSelect
              v-model="selectedMinutes"
              :options="optionsMinutes"
              class="select select-minutes"
              :class="{ 'has-value': selectedType }"
            />
          </div>
          <TrainingDescription />
        </div>
        <!-- Показники відомого гравця -->
        <div class="form__block player">
          <FormInputPlayer />
        </div>
        <!-- Характеристика гравця -->
        <div class="form__block form__content-characteristics">
          <PlayerCharacteristics />
        </div>
        <!-- Відео посилання -->
        <div class="form__block video-files">
          <VideoLinks />
          <FilesLinks />
        </div>
      </div>
      <button type="submit" class="form__button">Збереги елемент</button>
    </div>
  </form>
</template>
