<template>
  <div class="page-wrapper">

    <h1>{{imgUrl}}</h1>
    <h1>{{title}}</h1>
    <h1>{{content}}</h1>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/products/" + context.params.id, {
        version: "draft"
      })
      .then(res => {
        return {
          imgUrl: res.data.story.content.imgUrl,
          title: res.data.story.content.title,
          previewText: res.data.story.content.content
        };
      });
  }
};
</script>

<style>
</style>
