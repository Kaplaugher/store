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
    <div class="products">

          <ProductPreview
            :title="product.title"
            :imgUrl="product.imgUrl"
            :altImgUrl="product.altImgUrl"
            :previewText="product.previewText"
            :id="product.id"
            v-for="product in products" :key="product.id"/>
    </div>

  </div>
</template>

<script>
import ProductPreview from "@/components/Products/ProductPreview";
export default {
  components: {
    ProductPreview
  },
    asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "products/"
      })
      .then(res => {
        return {
          products: res.data.stories.map(product => {
            return {
              id: product.slug,
              title: product.content.title,
              previewText: product.content.description,
              imgUrl: product.content.imgUrl,
              altImgUrl: product.content.altImgUrl,
              content: product.content.content
            };
          })
        };
      });
  },
  data() {
    return {
      hidden: true,
      items: [
        {
          src: "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1535576470/onlineStore/design1.jpg"
        },
        {
          src: "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1535664967/onlineStore/smartmockups_jlh39074.jpg"
        },
        {
          src: "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1535665066/onlineStore/smartmockups_jlh3bhz6.jpg"
        },
        {
          src: "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1535665140/onlineStore/smartmockups_jlh3d5zu.jpg"
        }
      ],
    };
  }
};
</script>

<style scoped>

.carousel {
  height: 100vh;
}

.products {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

</style>

