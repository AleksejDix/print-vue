<script setup>
import { computed } from "vue";
import TheWelcome from "./components/TheWelcome.vue";
import HeaderAgencyAddress from "./components/HeaderAgencyAddress.vue";
import data from "@/data/report.json";

function toSrc(img) {
  return `data:image/png;base64,${img}`;
}

const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const today = computed(() => date.toLocaleDateString("de-DE", options));
</script>

<template>
  <main>
    <section class="page" v-for="n in 10" :key="n">
      <header class="flex justify-between">
        <HeaderAgencyAddress :agency="data.Agency"></HeaderAgencyAddress>
        <div>
          <img :src="toSrc(data.Images.AgencyLogo)" alt="Agency Logo" />
        </div>
      </header>

      <h1>Markwertanalyse</h1>
      <div>{{ today }}</div>

      <div>
        <TheWelcome />
      </div>

      <footer>{{ n }} / {{ 10 }}</footer>
    </section>
  </main>
</template>

<style scoped>
@page {
  margin: 2cm;
}

@page :left {
  margin-left: 4cm;
  margin-right: 3cm;
}

a:after {
  content: "( " attr(href) ") ";
}

img {
  max-width: 10cm;
}

h1 {
  page-break-before: always;
}

h1,
h2,
h3,
h4,
h5 {
  page-break-after: avoid;
}

table,
figure {
  page-break-inside: avoid;
}
</style>
