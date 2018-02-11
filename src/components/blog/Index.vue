<template>
  <div id="blog-index container">
    <div class="post container" v-for="post in posts" v-bind:key="post.id">
      <h1><router-link :to="{ name: 'BlogPost', params: { id: post.id } }">{{ post.title }}</router-link></h1>
      <p>{{ post.summary }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'blog-index',
  data() {
    return {
      posts: [],
    };
  },
  created() {
    axios.get(`${process.env.LYNLAB_BACKEND_HOST}/graphql?query=query{posts(last:10){id,title,summary,createdAt,updatedAt}}`)
      .then((res) => {
        this.posts.push(...res.data.data.posts);
      });
  },
};
</script>

<style>
#blog-index {

}
</style>
