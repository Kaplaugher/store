<template>
  <div class="card-wrapper">
    <div class="card-img">
      <div class="caption">
        <p>{{title}}</p>
        <p>{{price}}</p>
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
  }
};
</script>

<style>
</style>
