<template>
  <div id="blog-index">
    <div class="filter container" v-if="this.$route.query.filter">
      <a href="/blog"><square-button name="< 전체 목록으로" /></a>
    </div>

    <div class="post container" v-for="post in posts" v-bind:key="post.id">
      <h1 class="post-title"><router-link :to="{ name: 'BlogPost', params: { id: post.id } }">{{ post.title }}</router-link></h1>
      <p class="post-meta">
        <i class="far fa-clock"></i> {{ $d(Date.parse(post.createdAt)) }}
        <span v-if="post.postSeries"> · <i class="fas fa-list-ul"></i> <a :href="'?filter=postSeriesId:' + post.postSeries.id">{{ post.postSeries.name }} 시리즈</a></span>
         · <i class="far fa-folder"></i> <a :href="'?filter=postCategoryId:' + post.postCategory.id">{{ post.postCategory.name }}</a>
         · <i class="fas fa-users"></i> {{ post.hitCount }}
      </p>
      <p>{{ post.summary }}</p>
      <p class="post-preview" v-if="post.preview"><img :src="post.preview"></p>
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

      let paginationQuery = `${this.$route.query.filter || ''},last:20`;
      if (this.posts.length > 0) {
        paginationQuery += `,before:${this.posts.slice(-1)[0].id}`;
      }

      axios
        .get(
          `${
            process.env.LYNLAB_BACKEND_HOST
          }/graphql?query=query{posts(${paginationQuery}){id,title,summary,preview,postCategory{id,name},postSeries{id,name},hitCount,createdAt}}`,
        )
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
.post-title {
  margin-bottom: 0;
}

.post-meta {
  margin-top: 8px;
  color: #9e9e9e;
  line-height: 2;
}

.post-preview {
  overflow: hidden;
  max-height: 200px;
  max-width: 800px;
}

.post-preview img {
  width: 100%;
  bottom: -100%;
}

#load-more {
  padding: 50px 0;
  text-align: center;
}
</style>
