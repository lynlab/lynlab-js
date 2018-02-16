<template>
  <div id="blog-post">
    <div v-if="post" class="container">
      <h1 id="post-title">{{ post.title }}</h1>
      <p id="post-meta">{{ $d(Date.parse(post.createdAt)) }}</p>
      <div id="post-body">{{ post.body }}</div>
      <div class="addthis_inline_share_toolbox"></div>
      <div id="post-comments">
        <vue-disqus shortname="lynlab" :identifier="post.id" />
      </div>
    </div>
    <error-view v-else-if="loaded" message="포스트를 찾을 수 없음" />
    <loading-view v-else message="포스트를 불러오는 중..." />
  </div>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus';
import axios from 'axios';

export default {
  name: 'BlogPost',
  components: { VueDisqus },
  data() {
    return {
      post: null,
      loaded: false,
    };
  },
  created() {
    axios.get(`${process.env.LYNLAB_BACKEND_HOST}/graphql?query=query{post(id:${this.$route.params.id}){id,title,body,createdAt}}`)
      .then((res) => {
        this.loaded = true;

        this.post = res.data.data.post;
        document.title = `${this.post.title} - LYnLab Blog`;
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

#post-body {
  margin-bottom: 100px;
  text-align: left;
  font-size: 18px;
  line-height: 1.75;
}
</style>
