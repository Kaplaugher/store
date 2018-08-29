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
          src: "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1535576470/onlineStore/design1.jpg"
        },
        {
          src: "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1535576470/onlineStore/design1.jpg"
        },
        {
          src: "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1535576470/onlineStore/design1.jpg"
        },
        {
          src: "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1535576470/onlineStore/design1.jpg"
        }
      ],
      products: dummyProducts
    };
  }
};
</script>

<style>

.carousel {
  height: 100vh;
}

.imgTest {
  height: 200px;
}
</style>

