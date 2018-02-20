<template>
  <div id="blog-post">
    <div v-if="post" class="container">
      <h1 id="post-title">{{ post.title }}</h1>
      <p id="post-meta">{{ $d(Date.parse(post.createdAt)) }} | {{ post.postCategory.name }}</p>
      <div id="post-body" v-html="marked(post.body)"></div>
      <div class="addthis_inline_share_toolbox"></div>
      <div id="post-comments">
        <vue-disqus shortname="lynlab" :identifier="'id=' + post.id" />
      </div>
    </div>
    <error-view v-else-if="loaded" message="포스트를 찾을 수 없음" />
    <loading-view v-else message="포스트를 불러오는 중..." />
  </div>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus';
import axios from 'axios';
import marked from 'marked';

export default {
  name: 'BlogPost',
  components: { VueDisqus },
  methods: { marked },
  data() {
    return {
      post: null,
      loaded: false,
    };
  },
  created() {
    axios.get(`${process.env.LYNLAB_BACKEND_HOST}/graphql?query=query{post(id:${this.$route.params.id}){id,title,postCategory{id,name},body,createdAt}}`)
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
  font-size: 40px;
}

#post-meta {
  margin-top: 8px;
  color: #9E9E9E;
}
</style>

<style>
#post-body {
  margin: 50px 0 100px 0;
  text-align: left;
  line-height: 1.75;
}

#post-body blockquote {
  margin: 0;
  padding: 10px 20px;
  background-color: #F5F5F5;
  border-left: #E0E0E0 solid 10px;
}

#post-body *:not(pre) code {
  font-size: 16px;
}

#post-body pre {
  overflow-y: scroll;
  padding: 10px 20px;
  background-color: #F5F5F5;
}

#post-body img {
  display: block;
  margin: 40px auto;
  max-width: 600px;
}
</style>
