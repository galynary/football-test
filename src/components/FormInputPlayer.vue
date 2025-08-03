<script setup>
import { ref } from "vue";
const name1 = ref("Кріштіану Рональду");
const number1 = ref("159");

const name2 = ref("Ліонель Мессі");
const number2 = ref("147");

const name3 = ref("Михайло Мудрик");
const number3 = ref("123");
</script>

<template>
  <div class="wrap-form-input">
    <p class="form__label">Додати показник відомого гравця №1</p>
    <div class="form__inputs">
      <div class="wrap-input">
        <input
          v-model="name1"
          name="text"
          placeholder=""
          class="form__input name"
        />
        <span class="icon-input-left">
          <img
            src="@/assets/image/icon-inputL.svg"
            alt="Icon"
            class="icon-input"
          />
        </span>
        <span class="icon-input-right">
          <img
            src="@/assets/image/icon-inputR.svg"
            alt="Icon"
            class="icon-input"
          />
        </span>
      </div>
      <div class="wrap_input-num">
        <input
          v-model="number1"
          label=""
          name="number"
          placeholder=""
          class="form-input-num"
        />
        <span class="icon-line left"> </span>
        <span class="icon-line right"> </span>
      </div>
    </div>
  </div>
  <div class="wrap-form-input">
    <p class="form__label">Додати показник відомого гравця №2</p>
    <div class="form__inputs">
      <div class="wrap-input">
        <input
          v-model="name2"
          name="name2"
          placeholder=""
          class="form__input name"
        />
        <span class="icon-input-left">
          <img
            src="@/assets/image/icon-inputL.svg"
            alt="Icon"
            class="icon-input"
          />
        </span>
        <span class="icon-input-right">
          <img
            src="@/assets/image/icon-inputR.svg"
            alt="Icon"
            class="icon-input"
          />
        </span>
      </div>
      <div class="wrap_input-num">
        <input
          v-model="number2"
          name="number"
          placeholder=""
          class="form-input-num"
        />
        <span class="icon-line left"> </span>
        <span class="icon-line right"> </span>
      </div>
    </div>
  </div>
  <div class="wrap-form-input">
    <p class="form__label">Додати показник відомого гравця №2</p>
    <div class="form__inputs">
      <div class="wrap-input">
        <input
          v-model="name2"
          name="name"
          placeholder=""
          class="form__input name"
        />
        <span class="icon-input-left">
          <img
            src="@/assets/image/icon-inputL.svg"
            alt="Icon"
            class="icon-input"
          />
        </span>
        <span class="icon-input-right">
          <img
            src="@/assets/image/icon-inputR.svg"
            alt="Icon"
            class="icon-input"
          />
        </span>
      </div>
      <div class="wrap_input-num">
        <input
          v-model="number2"
          name="number"
          placeholder=""
          class="form-input-num"
        />
        <span class="icon-line left"> </span>
        <span class="icon-line right"> </span>
      </div>
    </div>
  </div>
  <div class="wrap-form-input">
    <p class="form__label">Додати показник відомого гравця №3</p>
    <div class="form__inputs">
      <div class="wrap-input">
        <input
          v-model="name3"
          name="name"
          placeholder=""
          class="form__input name"
        />
        <span class="icon-input-left">
          <img
            src="@/assets/image/icon-inputL.svg"
            alt="Icon"
            class="icon-input"
          />
        </span>
        <span class="icon-input-right">
          <img
            src="@/assets/image/icon-inputR.svg"
            alt="Icon"
            class="icon-input"
          />
        </span>
      </div>
      <div class="wrap_input-num">
        <input
          v-model="number3"
          name="number"
          placeholder=""
          class="form-input-num"
        />
        <span class="icon-line left"> </span>
        <span class="icon-line right"> </span>
      </div>
    </div>
  </div>
</template>
