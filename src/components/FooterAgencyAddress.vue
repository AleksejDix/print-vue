<template>
  <div v-if="agency" class="flex divide-x text-xs">
    <span class="inline-block px-2" v-if="agency.Name">{{ agency.Name }}</span>
    <a
      class="inline-block px-2"
      v-if="agency.Phone"
      :href="`tel:${agency.Phone}`"
      >{{ agency.Phone }}</a
    >
    <a
      class="inline-block px-2"
      v-if="agency.Email"
      :href="`mailto:${agency.Phone}`"
      >{{ agency.Email }}</a
    >
  </div>
</template>

<script setup>
defineProps(["agency"]);
</script>
