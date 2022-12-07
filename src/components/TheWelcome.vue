<script setup>
import data from "@/data/report.json";
function toSrc(img) {
  return `data:image/png;base64,${img}`;
}
</script>
<template>
  <!-- <img :src="toSrc(data.Images.Overview1)" alt="Overview1" />
  <img :src="toSrc(data.Images.Overview2)" alt="Agency Overview2" />
  <img :src="toSrc(data.Images.TitleShape)" alt="TitleShape" />
  <img :src="toSrc(data.Images.Marker)" alt="Marker" /> -->
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
</template>
