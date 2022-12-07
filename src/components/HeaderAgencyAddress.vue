<template>
  <address v-if="agency" class="text-[12pt] leading-tight not-italic">
    <div v-if="agency.Name" class="font-bold">{{ agency.Name }}</div>
    <div>
      <span v-if="agency.AddressLine1">{{ agency.AddressLine1 }}</span
      >,
      <span v-if="agency.AddressLine2">{{ agency.AddressLine2 }}</span>
    </div>
  </address>
</template>

<script setup>
defineProps(["agency"]);
</script>
