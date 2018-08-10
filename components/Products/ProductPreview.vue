<template>
  <v-card class="card">
    <v-card-media
      :src="imgUrl"
      height="200px"
    ></v-card-media>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{title}}</h3>
        <p>{{previewText}}</p>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="orange" :to="`/products/${id}`">Details</v-btn>
    </v-card-actions>
  </v-card>
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
    previewText: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
  }
};
</script>

<style>
</style>
