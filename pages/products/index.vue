  <template>
    <products-wrapper>
      <div class="products-list">
        <ProductPreview
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :imgUrl="product.imgUrl"
          :previewText="product.previewText"
          :id="product.id"/>
      </div>
    </products-wrapper>
  </template>

  </v-container>

  <script>
  import ProductPreview from '@/components/Products/ProductPreview'
export default {
  components: {
    ProductPreview
  },
  data() {
    return {
      products: [
        {
          title: 'First Shirt',
          previewText: 'This is the preview text',
          imgUrl: 'https://source.unsplash.com/random',
          id: 'our-first-shirt'
        },
        {
          title: 'Second Shirt',
          previewText: 'This is the preview text for second shirt',
          imgUrl: 'https://source.unsplash.com/random',
          id: 'our-second-shirt'
        }
      ]
    };
  }
};
</script>

<style>
.products-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.card {
  width: 300px;
}
</style>
