<template>
  <div
    class="pt-[4cm] grid overflow-hidden grid-cols-2 auto-rows-content px-[1.5cm] py-[1cm]"
  >
    <div class="box row-span-1 col-span-2 bg-[#113654] p-[0.5cm]">
      <p class="text-white text-2xl">
        Einfamilienhaus mit Seeblick und viel Umschwung.
      </p>
      <p class="text-white text-2xl">
        Einfamilienhaus mit Seeblick undviel Umschwung.
      </p>
      <p class="text-white text-2xl">
        Einfamilienhaus mit Seeblick und viel Umschwung.
      </p>
      <p class="text-white font-light mt-2">
        Neue Lenzburgerstrasse 58, 8572 Kölliken
      </p>
    </div>
    <div class="box col-span-1 bg-[#4d9ab9] p-[0.5cm] max-h-[7cm]">
      <p class="text-l text-white">Immobilienpreis</p>
      <p class="text-xl text-white font-semibold">CHF 1’775’000</p>
      <hr class="my-[0.8cm]" />
      <div class="mb-[0.5cm]">
        <p class="text-white">Preis / m2</p>
        <p class="text-white font-light">CHF 12’000</p>
      </div>
      <div>
        <p class="text-white">Preisspanne</p>
        <p class="text-white font-light">CHF 1’670’000 - 1’880’000</p>
      </div>
    </div>
    <div class="col-span-1 max-h-[7cm]">
      <img
        :src="toSrc(data.Images.CadastreMap)"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="box col-span-2 bg-[#113654] p-[0.5cm]">
      <p class="text-white text-2xl mb-[0.5cm]">Übersicht</p>
      <div
        class="grid overflow-hidden grid-cols-3 grid-rows-2 gap-2 text-white"
      >
        <div class="box">
          <p class="font-semibold">Immobilientyp</p>
          <p class="font-light">
            <span class="text-cyan-600">⌘</span> Einfamilienhaus
          </p>
        </div>
        <div class="box">
          <p class="font-semibold">Baujahr</p>
          <p class="font-light"><span class="text-cyan-600">⌘</span> 2009</p>
        </div>
        <div class="box">
          <p class="font-semibold">Wohnfläche</p>
          <p class="font-light"><span class="text-cyan-600">⌘</span> 210 m2</p>
        </div>
        <div class="box">
          <p class="font-semibold">Zimmer</p>
          <p class="font-light"><span class="text-cyan-600">⌘</span> 6.5</p>
        </div>
        <div class="box">
          <p class="font-semibold">Renovationsjahr</p>
          <p class="font-light"><span class="text-cyan-600">⌘</span> 2016</p>
        </div>
        <div class="box">
          <p class="font-semibold">Grundstückfläche</p>
          <p class="font-light"><span class="text-cyan-600">⌘</span> 480 m2</p>
        </div>
      </div>
    </div>
    <div class="box col-span-2 bg-[#e2e2e2] p-[0.5cm]">
      <p class="text-2xl mb-[0.5cm]">
        Standort <span class="text-cyan-600">2/5</span>
      </p>
      <div class="grid overflow-hidden grid-cols-3 grid-rows-2 gap-2">
        <div class="box">
          <p class="font-semibold mb-1">Stille</p>
          <rating />
        </div>
        <div class="box">
          <p class="font-semibold mb-1">Schulen</p>
          <rating />
        </div>
        <div class="box">
          <p class="font-semibold mb-1">Luftverschmutzung</p>
          <rating />
        </div>
        <div class="box">
          <p class="font-semibold mb-1">Shops</p>
          <rating />
        </div>
        <div class="box">
          <p class="font-semibold mb-1">Aussicht</p>
          <rating />
        </div>
        <div class="box">
          <p class="font-semibold mb-1">Empfang</p>
          <rating />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "@/data/report.json";
import Rating from "./Rating.vue";
function toSrc(img) {
  return `data:image/png;base64,${img}`;
}
</script>
⌂
