<script setup>
import { computed } from "vue";
import TheWelcome from "./components/TheWelcome.vue";
import HeaderAgencyAddress from "./components/HeaderAgencyAddress.vue";
import FooterAgencyAddress from "./components/FooterAgencyAddress.vue";
import PropertyAddress from "./components/PropertyAddress.vue";
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

function onClick() {
  console.log(window.print());
}
</script>

<template>
  <main class="bg-gray-400 print:bg-transparent space-y-[2cm] print:space-y-0">
    <button @click="onClick" class="print:hidden">print</button>

    <section
      class="page w-[210mm] h-[296.5mm] print:m-0 bg-white relative mx-auto"
      v-for="n in 10"
      :key="n"
    >
      <header class="absolute top-0 left-0 right-0 w-full h-[3cm]">
        <div class="flex justify-between px-[1.5cm] items-center">
          <HeaderAgencyAddress
            class="w-3/4"
            :agency="data.Agency"
          ></HeaderAgencyAddress>
          <div class="flex justify-end w-1/4">
            <img
              class="h-[30mm] w-[160mm] object-contain"
              :src="toSrc(data.Images.AgencyLogo)"
              alt="Agency Logo"
            />
          </div>
        </div>
      </header>

      <div class="pt-[3cm]">
        <div class="px-[1.5cm] py-[1cm]">
          <h1
            class="text-[32pt] font-semibold leading-[125%] text black"
            contenteditable
          >
            Markwertanalyse
          </h1>
          <div class="text-[18pt]">{{ today }}</div>
        </div>

        <div class="px-[1.5cm]">
          <img class="aspect-video" :src="toSrc(data.Images.Main)" alt="Main" />

          <div class="bg-black text-white px-[1cm] py-[0.5cm]">
            <h2>{{ data.Teaser }}</h2>
            <PropertyAddress :address="data.Address"></PropertyAddress>
          </div>
        </div>

        <div class="makler px-[1.5cm] py-[1cm]">
          <div class="flex items-center gap-8">
            <div class="grow-0">
              <img
                class="aspect-square rounded-full w-[3cm] h-[3m]"
                :src="toSrc(data.Images.Main)"
                alt="Main"
              />
            </div>
            <div class="grow">
              <div v-if="data.Employee.Name">{{ data.Employee.Name }}</div>
              <div v-if="data.Employee.Phone">{{ data.Employee.Phone }}</div>
            </div>
          </div>
        </div>

        <!-- <TheWelcome /> -->
      </div>

      <footer class="absolute bottom-0 left-0 right-0 w-full px-[1.5cm]">
        <div
          class="bg-black px-[1cm] h-[1.5cm] flex items-center justify-between text-white"
        >
          <FooterAgencyAddress :agency="data.Agency"></FooterAgencyAddress>
          <div>{{ n }}</div>
        </div>
      </footer>
    </section>
  </main>
</template>

<style scoped>
a:after {
  content: "( " attr(href) ") ";
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
