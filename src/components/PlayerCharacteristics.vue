<script setup>
import { ref, nextTick } from "vue";

const player = ref("ГРАВЕЦЬ");
const mentalityValue = ref("");
const physicsValue = ref("");
const defenseValue = ref("");
const attackValue = ref("");
const matratingValue = ref("");
const thinkingValue = ref("");
const technigValue = ref("");
const tacticsValue = ref("");

const isInputDisabled = {
  isPhysDisabled: ref(true),
  isMentalDisabled: ref(true),
  isDefenDisabled: ref(true),
  isAttackDisabled: ref(true),
  isThinkingDisabled: ref(true),
  isTacticsDisabled: ref(true),
  isTechnDisabled: ref(true),
  isMatratingDisabled: ref(true),
};

const inputRef = {
  mentalityRef: ref(null),
  physicsRef: ref(null),
  defenseRef: ref(null),
  matratingRef: ref(null),
  thinkingRef: ref(null),
  techniqRef: ref(null),
  attackRef: ref(null),
  tacticsRef: ref(null),
};

const activateInput = async (key, disabledKey) => {
  isInputDisabled[disabledKey].value = false;
  await nextTick();
  inputRef[key].value?.focus();
};

const handleInput = (e, target) => {
  let value = e.target.value;
  if (value.length > 3) {
    value = value.slice(0, 3);
  }
  switch (target) {
    case "mentalityValue":
      mentalityValue.value = value;
      break;
    case "physicsValue":
      physicsValue.value = value;
      break;
    case " defenseValue":
      defenseValue.value = value;
      break;
    case "attackValue":
      attackValue.value = value;
      break;
    case "matratingValue":
      matratingValue.value = value;
      break;
    case "thinkingValue":
      thinkingValue.value = value;
      break;
    case "technigValue":
      technigValue.value = value;
      break;
    case "tacticsValue":
      tacticsValue.value = value;
      break;
  }
};
</script>

<template>
  <!---- Показники гравця---->
  <div class="wrap-characteristics characteristics">
    <div class="characteristics__container">
      <h3 class="characteristics__title form__label">
        Додати вплив на категорії та їх розподіл
      </h3>
      <div class="characteristics__content">
        <!-- гравець -->
        <div class="characteristics__inputs character-player">
          <div class="characteristics__inputs-player">
            <svg viewBox="0 0 100 100" class="characteristics__octagon">
              <polygon
                points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30"
                fill="none"
                stroke="#c59014"
                stroke-width="3"
              />
            </svg>
            <input
              type="text"
              class="characteristics__input-player"
              v-model="player"
            />
          </div>
        </div>

        <!-- менталітет -->
        <div class="characteristics mentality">
          <input
            :ref="inputRef.mentalityRef"
            type="text"
            class="gray-bgr characteristics__input"
            pattern="^\d+%?$"
            :value="mentalityValue"
            :disabled="isInputDisabled.isMentalDisabled.value"
            @input="(e) => handleInput(e, 'mentalityValue')"
          />
          <button
            type="button"
            class="characteristics__button"
            @click="() => activateInput('mentalityRef', 'isMentalDisabled')"
          >
            менталітет
          </button>
        </div>
        <!-- фізика -->
        <div class="characteristics physics">
          <input
            :ref="inputRef.physicsRef"
            type="text"
            class="gray-bgr characteristics__input"
            pattern="^\d+%?$"
            :value="physicsValue"
            :disabled="isInputDisabled.isPhysDisabled.value"
            @input="(e) => handleInput(e, 'physicsValue')"
          />
          <button
            type="button"
            class="characteristics__button"
            @click="() => activateInput('physicsRef', 'isPhysDisabled')"
          >
            фізика
          </button>
        </div>
        <!-- оборона -->
        <div class="characteristics defense">
          <input
            :ref="inputRef.defenseRef"
            type="text"
            class="gray-bgr characteristics__input"
            pattern="^\\d+%?$"
            :value="defenseValue"
            :disabled="isInputDisabled.isDefenDisabled.value"
            @input="(e) => handleInput(e, 'defenseValue')"
          />
          <button
            type="button"
            class="characteristics__button"
            @click="() => activateInput('defenseRef', 'isDefenDisabled')"
          >
            оборона
          </button>
        </div>
        <!-- атака -->
        <div class="characteristics attack">
          <input
            :ref="inputRef.attackRef"
            type="text"
            class="gray-bgr characteristics__input"
            pattern="^\\d+%?$"
            :value="attackValue"
            :disabled="isInputDisabled.isAttackDisabled.value"
            @input="(e) => handleInput(e, 'attackValue')"
          />
          <button
            type="button"
            class="characteristics__button"
            @click="() => activateInput('attackRef', 'isAttackDisabled')"
          >
            атака
          </button>
        </div>
        <!-- тактика -->
        <div class="characteristics tactics">
          <button
            type="button"
            class="characteristics__button"
            @click="() => activateInput('tacticsRef', 'isTacticsDisabled')"
          >
            тактика
          </button>
          <input
            :ref="inputRef.tacticsRef"
            type="text"
            class="gray-bgr characteristics__input"
            pattern="^\d+%?$"
            :value="tacticsValue"
            :disabled="isInputDisabled.isTacticsDisabled.value"
            @input="(e) => handleInput(e, 'tacticsValue')"
          />
        </div>
        <!-- техніка -->
        <div class="characteristics technique">
          <button
            type="button"
            class="characteristics__button"
            @click="() => activateInput('techniqRef', 'isTechnDisabled')"
          >
            техніка
          </button>
          <input
            :ref="inputRef.techniqRef"
            type="text"
            class="gray-bgr characteristics__input"
            pattern="^\d+%?$"
            :value="technigValue"
            :disabled="isInputDisabled.isTechnDisabled.value"
            @input="(e) => handleInput(e, 'technigValue')"
          />
        </div>
        <!-- мислення -->
        <div class="characteristics thinking">
          <button
            type="button"
            class="characteristics__button"
            @click="() => activateInput('thinkingRef', 'isThinkingDisabled')"
          >
            мислення
          </button>
          <input
            :ref="inputRef.thinkingRef"
            type="text"
            class="gray-bgr characteristics__input"
            pattern="^\\d+%?$"
            :value="thinkingValue"
            :disabled="isInputDisabled.isThinkingDisabled.value"
            @input="(e) => handleInput(e, 'thinkingValue')"
          />
        </div>
        <!--  матч-рейт. -->
        <div class="characteristics matrating">
          <button
            type="button"
            class="characteristics__button"
            @click="() => activateInput('matratingRef', 'isMatratingDisabled')"
          >
            матч-рейт.
          </button>
          <input
            :ref="inputRef.matratingRef"
            type="text"
            class="gray-bgr characteristics__input"
            pattern="^\\d+%?$"
            :value="matratingValue"
            :disabled="isInputDisabled.isMatratingDisabled.value"
            @input="(e) => handleInput(e, 'matratingValue')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
