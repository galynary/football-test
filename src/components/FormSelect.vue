<script setup>
import {
  ref,
  computed,
  defineProps,
  defineEmits,
  onMounted,
  onBeforeUnmount,
} from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const props = defineProps({
  label: { type: String, default: "Вибір" },
  modelValue: [String, Number],
  options: { type: Array, default: () => [] },
  activeDropdownId: String,
});
//передаємо властивості батьківському компоненту
const emit = defineEmits(["update:modelValue", "toggle-visibility"]);

const selectedOption = computed(() => {
  return (
    props.options.find((o) => o.value === props.modelValue) || props.options[0]
  );
});
const isActive = ref(false);
const root = ref(null);

const toggleClass = () => {
  isActive.value = !isActive.value;
  emit("toggle-visibility", isActive.value);
};

const updateValue = (option) => {
  emit("update:modelValue", option.value);
  isActive.value = false;
  emit("toggle-visibility", false);
};

const handleClickOutside = (event) => {
  if (root.value && !root.value.contains(event.target)) {
    if (isActive.value) {
      isActive.value = false;
      emit("toggle-visibility", false);
    }
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="form__select" ref="root">
    <label :for="id" class="form__label">{{ label }}</label>

    <Listbox :modelValue="selectedOption" @update:modelValue="updateValue">
      <div class="form__input">
        <div class="form__input-cont" :class="{ active: isActive }">
          <ListboxButton class="form__button" @click="toggleClass">
            <span>{{ selectedOption?.text }}</span>
            <img
              src="@/assets/image/halochka.svg"
              alt="Icon"
              class="form__icon"
            />
          </ListboxButton>

          <ListboxOptions class="form__options" @after-leave="handleClose">
            <ListboxOption
              v-for="option in options"
              :key="option.value"
              :value="option"
              class="form__option"
            >
              {{ option.text }}
            </ListboxOption>
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  </div>
</template>
