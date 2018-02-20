<template>
  <div id="blog-index">
    <div class="post container" v-for="post in posts" v-bind:key="post.id">
      <h1 id="post-title"><router-link :to="{ name: 'BlogPost', params: { id: post.id } }">{{ post.title }}</router-link></h1>
      <p id="post-meta">{{ $d(Date.parse(post.createdAt)) }} | {{ post.postCategory.name }}</p>
      <p>{{ post.summary }}</p>
    </div>
    <p id="load-more" v-if="!loading" v-on:click="loadPosts()">
      <square-button v-if="!noMore" name="+ LOAD MORE"/>
      <span v-else>마지막 포스트입니다 :)</span>
    </p>
    <loading-view v-if="loading"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BlogIndex',
  methods: {
    loadPosts() {
      this.loading = true;

      let paginationQuery = 'last:20';
      if (this.posts.length > 0) {
        paginationQuery += `,before:${this.posts.slice(-1)[0].id}`;
      }

      axios.get(`${process.env.LYNLAB_BACKEND_HOST}/graphql?query=query{posts(${paginationQuery}){id,title,postCategory{id,name}summary,createdAt}}`)
        .then((res) => {
          const results = res.data.data.posts;
          this.posts.push(...results);
          if (results.length === 0) {
            this.noMore = true;
          }

          this.loading = false;
        });
    },
  },
  data() {
    return {
      posts: [],
      loading: false,
      noMore: false,
    };
  },
  created() {
    this.loadPosts();
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

#load-more {
  padding: 50px 0;
  text-align: center;
}
</style>
