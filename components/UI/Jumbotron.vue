<template>
  <v-jumbotron
    :src="imgUrl"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">{{title}}</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    imgUrl: {
      type: String,
      required: false
    }
  },
  data() {
    return {

    };
  }
};
</script>
<style>
</style>

