<template>
  <div class="page-wrapper">
    <section class="item-section">
      <div class="image">
        <img :src="image" alt="" class="img">
      </div>
      <div class="description">
         <h1 class="display-2">{{product}}</h1>
        <p v-if="inventory > 10" class="subheading">In Stock</p>
        <p v-else-if="inventory > 0 && inventory > 0">Almost Sold Out!</p>
        <p v-else class="subheading">Out of Stock</p>

        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>

        <v-select
            class="select"
            :items="sizes"
            label="Choose A Size"
            outline
        ></v-select>
          <div
          v-for="variant in variants"
          :key="variant.variantId"
          class="color-box"
          :style="{backgroundColor: variant.variantColor}"
          @mouseover="updateProduct(variant.variantImage)">
          </div>

          <v-btn class="mt-4" color="info" :disabled="!inStock">Add to Cart</v-btn>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: "tshirt 1",
      image:
        "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1533688012/onlineStore/vmSocks-green-onWhite.jpg",
      inStock: true,
      inventory: 100,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage:
            "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1533688012/onlineStore/vmSocks-green-onWhite.jpg"
        },
        {
          variantId: 2235,
          variantColor: "blue",
          varientImage:
            "https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1533774148/onlineStore/vmSocks-blue-onWhite.jpg"
        }
      ],
      sizes: ["Large", "Medium", "Small", "X-Sm"]
    };
  },
  methods: {
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
};
</script>

<style>
.item-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
}

.image {
  justify-self: end;
}

.img {
  height: 350px;
}

.select {
  width: 150px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}
</style>
