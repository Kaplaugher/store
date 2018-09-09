<template>
      <div class="card">
        <img :src="image" alt="" v-on:hover="image = altImgUrl">
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
    },
    altImgUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      image: this.imgUrl
    }
  }
};
</script>

<style>

.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
}

.card img {
  max-height: 40vh;
  justify-self: flex-end;
}

.caption {
  justify-self: flex-start;
}

.title {
  font-size: 24px;
}

.price {
  font-size: 24px;
}
</style>
