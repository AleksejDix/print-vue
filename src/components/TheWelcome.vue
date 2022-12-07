<script setup>
import data from "@/data/report.json";
function toSrc(img) {
  return `data:image/png;base64,${img}`;
}
</script>
<template>
  <pre>{{ data }}</pre>
  <img :src="toSrc(data.Images.AgencyLogo)" alt="Agency Logo" />
  <img :src="toSrc(data.Images.Main)" alt="Main" />
  <!-- <img :src="toSrc(data.Images.Overview1)" alt="Overview1" />
  <img :src="toSrc(data.Images.Overview2)" alt="Agency Overview2" />
  <img :src="toSrc(data.Images.TitleShape)" alt="TitleShape" />
  <img :src="toSrc(data.Images.Marker)" alt="Marker" /> -->
  <img :src="toSrc(data.Images.CadastreMap)" alt="CadastreMap" />

  <img :src="toSrc(data.ThemedImages.Address)" alt="Address" />
  <img :src="toSrc(data.ThemedImages.PropertyPrice)" alt="PropertyPrice" />
  <img :src="toSrc(data.ThemedImages.PropertyType)" alt="PropertyType" />
  <img :src="toSrc(data.ThemedImages.Rooms)" alt="Rooms" />
  <img
    :src="toSrc(data.ThemedImages.ConstructionYear)"
    alt="ConstructionYear"
  />
  <img :src="toSrc(data.ThemedImages.LivingSpace)" alt="LivingSpace" />
  <img :src="toSrc(data.ThemedImages.RenovationYear)" alt="RenovationYear" />
  <img :src="toSrc(data.ThemedImages.PlotSize)" alt="PlotSize" />

  <img :src="toSrc(data.RatingImages.Overall)" alt="Rating Overall" />
  <img :src="toSrc(data.RatingImages.Silence)" alt="Rating Silence" />
  <img :src="toSrc(data.RatingImages.View)" alt="Rating View" />
  <img :src="toSrc(data.RatingImages.Services)" alt="Rating Services" />
  <img :src="toSrc(data.RatingImages.Immissions)" alt="Rating Immissions" />
  <img :src="toSrc(data.RatingImages.Education)" alt="Rating Education" />
  <img :src="toSrc(data.RatingImages.Connections)" alt="Rating Connections" />

  Vue’s
  <a href="https://vuejs.org/" target="_blank" rel="noopener"
    >official documentation</a
  >
  provides you with all information you need to get started. This project is
  served and bundled with
  <a
    href="https://vitejs.dev/guide/features.html"
    target="_blank"
    rel="noopener"
    >Vite</a
  >. The recommended IDE setup is
  <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"
    >VSCode</a
  >
  +
  <a
    href="https://github.com/johnsoncodehk/volar"
    target="_blank"
    rel="noopener"
    >Volar</a
  >. If you need to test your components and web pages, check out
  <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
  and
  <a href="https://on.cypress.io/component" target="_blank"
    >Cypress Component Testing</a
  >.

  <br />

  More instructions are available in <code>README.md</code>. Get official tools
  and libraries for your project:
  <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
  <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
    >Vue Router</a
  >,
  <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
    >Vue Test Utils</a
  >, and
  <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
    >Vue Dev Tools</a
  >. If you need more resources, we suggest paying
  <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"
    >Awesome Vue</a
  >
  a visit. Got stuck? Ask your question on
  <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>,
  our official Discord server, or
  <a
    href="https://stackoverflow.com/questions/tagged/vue.js"
    target="_blank"
    rel="noopener"
    >StackOverflow</a
  >. You should also subscribe to
  <a href="https://news.vuejs.org" target="_blank" rel="noopener"
    >our mailing list</a
  >
  and follow the official
  <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
  twitter account for latest news in the Vue world. As an independent project,
  Vue relies on community backing for its sustainability. You can help us by
  <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
    >becoming a sponsor</a
  >.
</template>
