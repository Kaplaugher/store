<template>
  <div class="home-wrapper">
    <div class="carousel">
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm4 v-for="product in products" :key="product.id">
          <ProductPreview
            :title="product.title"
            :imgUrl="product.imgUrl"
            :price="product.price"
            :id="product.id"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import dummyProducts from "../products.js";
import ProductPreview from "@/components/Products/ProductPreview";
export default {
  components: {
    ProductPreview
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      products: dummyProducts
    };
  }
};
</script>

<style>
</style>

