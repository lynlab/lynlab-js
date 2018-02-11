<template>
  <div id="blog-post">
    <div class="container">
      <h1 id="title">{{ post.title }}</h1>
      <div id="body">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'blog-index',
  data() {
    return {
      post: null,
    };
  },
  created() {
    axios.get(`${process.env.LYNLAB_BACKEND_HOST}/graphql?query=query{post(id:${this.$route.params.id}){id,title,body,createdAt,updatedAt}}`)
      .then((res) => {
        this.post = res.data.data.post;
        document.title = `${this.post.title} - LYnLab Blog`;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style>
#title {
  font-weight: lighter;
}

#body {
  text-align: left;
  font-size: 18px;
  line-height: 1.75;
}
</style>
