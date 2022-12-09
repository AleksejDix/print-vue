<template>
  <main class="bg-gray-400 print:bg-transparent space-y-[2cm] print:space-y-0">
    <div class="grid gap-8 grid-cols-3 max-w-xl mx-auto">
      <button
        @click="onClick"
        class="print:hidden bg-white text-black px-3 py-2 whitespace-nowrap"
      >
        print
      </button>
      <button
        @click="generatePDF"
        class="print:hidden bg-white text-black px-3 py-2 whitespace-nowrap"
      >
        PDF herunterladen
      </button>
    </div>

    <div ref="page">
      <section
        v-for="(page, index) in pages"
        :key="index"
        class="page w-[210mm] h-[296.99999999mm] print:m-0 bg-white relative mx-auto border-b"
      >
        <component :is="header"></component>

        <header class="absolute top-0 left-0 right-0 w-full h-[3cm]">
          <div class="flex justify-between px-[1.5cm] items-center py-[1cm]">
            <HeaderAgencyAddress
              class="w-3/4"
              :agency="data.Agency"
            ></HeaderAgencyAddress>
            <div class="flex justify-end w-1/4 items-center">
              <img
                class="w-full"
                :src="toSrc(data.Images.AgencyLogo)"
                alt="Agency Logo"
              />
            </div>
          </div>
        </header>

        <component :is="content"></component>

        <div class="pt-[3cm]">
          <MainHeadline />

          <div class="px-[1.5cm]">
            <img
              class="aspect-video"
              :src="toSrc(data.Images.Main)"
              alt="Main"
            />

            <div class="pt-[32px]">
              <h2 class="font-bold text-2xl" contenteditable>
                {{ data.Teaser }}
              </h2>
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
                <div v-if="data.Employee.Name" contenteditable>
                  {{ data.Employee.Name }}
                </div>
                <div v-if="data.Employee.Phone" contenteditable>
                  {{ data.Employee.Phone }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <component :is="footer"></component>

        <!-- <footer class="absolute bottom-0 left-0 right-0 w-full px-[1.5cm]">
          <div class="h-[96px] flex items-center justify-between">
            <FooterAgencyAddress :agency="data.Agency"></FooterAgencyAddress>
            <div>{{ index }}</div>
          </div>
        </footer> -->
      </section>

      <section
        class="page w-[210mm] h-[296.5mm] print:m-0 bg-white relative mx-auto"
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

        <summary-main />

        <footer class="absolute bottom-0 left-0 right-0 w-full px-[1.5cm]">
          <div
            class="bg-black px-[1cm] h-[1.5cm] flex items-center justify-between text-white"
          >
            <FooterAgencyAddress :agency="data.Agency"></FooterAgencyAddress>
            <div>{{ index }}</div>
          </div>
        </footer>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import HeaderAgencyAddress from "./components/HeaderAgencyAddress.vue";
import FooterAgencyAddress from "./components/FooterAgencyAddress.vue";
import PropertyAddress from "./components/PropertyAddress.vue";
import data from "@/data/report.json";
import SummaryMain from "./components/SummaryMain.vue";
import html2pdf from "html2pdf.js";
import { toSrc } from "@/formatters/image";
import MainHeadline from "@/components/MainHeadline.vue";

const pages = 10;

const doc = {
  meta: {
    pages: 10,
    date: new Date(),
    agency: {},
    makler: {},
  },
  pages: {
    1: {
      component: "Deckblatt",
      body: {
        title: "",
        date: new Date(),
      },
    },
  },
};

const page = ref();

const opt = {
  margin: 0,
  filename: "myfile.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "cm", format: "A4", orientation: "portrait" },
};

function generatePDF() {
  // Choose the element that your content will be rendered to.
  // Choose the element and save the PDF for your user.
  html2pdf().set(opt).from(page.value).save();
}
</script>
