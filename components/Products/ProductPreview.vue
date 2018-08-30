<template>
  <div class="card-wrapper">
    <div class="card-img" :style="{ background: `url(${imgUrl})`}">
      <div class="caption">
        <p class="title">{{title}}</p>
        <p class="price">{{price}}</p>
      </div>
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
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    }
  },
};
</script>

<style>
.card-img {
  display: grid;
  height: 300px;
  background-size: cover;
  align-items: end;
  justify-items: center;
}

.title {
  font-size: 24px;
}

.price {
  font-size: 24px;
}
</style>
