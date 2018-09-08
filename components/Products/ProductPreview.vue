<template>
      <div class="card">
        <img :src="imgUrl" alt="">
        <div class="caption">
          <p class="title">{{title}}</p>
          <p class="price">{{price}}</p>
          <nuxt-link :to="`/shop/shirts/${id}`">LInk yo</nuxt-link>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: false
    },
    imgUrl: {
      type: String,
      required: true
    }
  },
};
</script>

<style>

.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.card img {
  width: 100%;
}

.title {
  font-size: 24px;
}

.price {
  font-size: 24px;
}
</style>
