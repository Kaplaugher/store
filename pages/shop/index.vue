  <template>
  <div>
    <Jumbotron title="All the jank" imgUrl="https://res.cloudinary.com/kaptivating-io/image/upload/c_fit,f_auto,h_620,q_auto:good/v1535664731/onlineStore/banner4.jpg" />
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

  </div>
  </template>

  <script>
import ProductPreview from "@/components/Products/ProductPreview";
import Jumbotron from "@/components/UI/Jumbotron";
export default {
  components: {
    ProductPreview,
    Jumbotron
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
