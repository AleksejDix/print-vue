<template>
  <div class="px-[1.5cm] py-[1cm]">
    <h1
      class="text-[32pt] font-semibold leading-[125%] text black"
      contenteditable
    >
      {{ i18n.t("title") }}
    </h1>
    <div class="text-[18pt]" contenteditable>
      {{ i18n.d(new Date()) }}
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const i18n = useI18n();
</script>

<i18n lang="json">
{
  "de": {
    "title": "schön"
  },
  "en": {
    "title": "nice"
  },
  "fr": {
    "title": "fr"
  },
  "it": {
    "title": "it"
  }
}
</i18n>
