  <template>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm4 v-for="product in products" :key="product.id">
          <ProductPreview
            :title="product.title"
            :imgUrl="product.imgUrl"
            :previewText="product.previewText"
            :id="product.id"/>
        </v-flex>
      </v-layout>
    </v-container>
  </template>

  <script>
import ProductPreview from "@/components/Products/ProductPreview";
export default {
  components: {
    ProductPreview
  },
  // data() {
  //   return {
  //     products: [
  //       {
  //         title: 'First Shirt',
  //         previewText: 'This is the preview text',
  //         imgUrl: 'https://source.unsplash.com/random',
  //         id: 'our-first-shirt'
  //       },
  //       {
  //         title: 'Second Shirt',
  //         previewText: 'This is the preview text for second shirt',
  //         imgUrl: 'https://source.unsplash.com/random',
  //         id: 'our-second-shirt'
  //       }
  //     ]
  //   };
  // }
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: "draft",
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
              content: product.content.content
            };
          })
        };
      });
  }
};
</script>

<style>
</style>
