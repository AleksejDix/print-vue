<script setup>
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <main>
    <section class="page" v-for="n in 10" :key="n">
      <header>{{ n }}</header>
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
