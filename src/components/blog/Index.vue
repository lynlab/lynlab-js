<template>
  <div id="blog-index">
    <div class="post container" v-for="post in posts" v-bind:key="post.id">
      <h1 id="post-title"><router-link :to="{ name: 'BlogPost', params: { id: post.id } }">{{ post.title }}</router-link></h1>
      <p id="post-meta">{{ $d(Date.parse(post.createdAt)) }}</p>
      <p>{{ post.summary }}</p>
    </div>
    <loading-view v-if="loading"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BlogIndex',
  data() {
    return {
      posts: [],
      loading: true,
    };
  },
  created() {
    axios.get(`${process.env.LYNLAB_BACKEND_HOST}/graphql?query=query{posts(last:10){id,title,summary,createdAt}}`)
      .then((res) => {
        this.loading = false;
        this.posts.push(...res.data.data.posts);
      });
  },
};
</script>

<style scoped>
#post-title {
  margin-bottom: 0;
}

#post-meta {
  margin-top: 8px;
  color: #9E9E9E;
}
</style>
