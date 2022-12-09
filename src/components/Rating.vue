<template>
  <div class="flex items-center">
    <div
      class="h-4 w-2"
      :class="[
        double < n ? 'bg-white' : 'bg-black',
        !(n & 1)
          ? 'rounded-[0px_100px_100px_0px] mr-2'
          : 'rounded-[100px_0px_0px_100px]',
      ]"
      v-for="n in 10"
      :key="n"
    ></div>

    <span class="text-lg" contenteditable @input="onChange">{{ num }}</span
    >/5
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  rating: {
    type: Number,
    default: 2,
  },
});

const onChange = (event) => {
  num.value = event.target.textContent;
};

const num = ref();
// eslint-disable-next-line vue/no-setup-props-destructure
num.value = props.rating * 2;

const double = computed(() => {
  return +num.value * 2;
});
</script>
