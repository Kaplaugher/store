<template>
  <v-container grid-list-lg justify-center>
    <v-layout row wrap align-center>
      <v-flex xs12 sm6>
        <img :src="imgUrl" :alt="title" class="productImg">
      </v-flex>
      <v-flex xs12 sm6>
        <h1>{{title}}</h1>
        <p>{{previewText}}</p>
        <ul>
          <li>Super good shit</li>
          <li>the best mats yo</li>
          <li>well worth the cash</li>
        </ul>
        <div>Front</div>
        <div>Back</div>
        <v-btn
          color="info"
          class="snipcart-add-item"
          data-item-url="`http://myapp.com/products/${slug}`"
          :data-item-id="itemId"
          :data-item-name="title"
          :data-item-price="price"
          :data-item-weight="weight"
          :data-item-description="previewText"
          data-item-custom1-name="Size"
          :data-item-custom1-options="sizeOptions"
        >Buy</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/products/' + context.params.id, {
        version: context.isDev ? 'draft' : 'published'
      })
      .then(res => {
        return {
          imgUrl: res.data.story.content.imgUrl,
          title: res.data.story.content.title,
          previewText: res.data.story.content.content,
          price: res.data.story.content.price,
          weight: res.data.story.content.weight,
          sizeOptions: res.data.story.content.sizeOptions,
          itemId: res.data.story.content.itemId,
          slug: res.data.slug
        };
        console.log(res.data.story.content);
      });
  }
};
</script>

<style>
.productImg {
  max-width: 100%;
}
</style>
