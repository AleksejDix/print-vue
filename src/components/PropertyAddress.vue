<template>
  <div v-if="address">
    {{ address }}
  </div>
</template>

<script setup>
defineProps(["address"]);
</script>
