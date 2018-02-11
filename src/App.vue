<template>
  <div id="app">
    <navigation-bar/>
    <router-view class="router-view"/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

body {
  margin: 0;
}

#app {
  font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FAFAFA;
  color: #212121;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.router-view {
  margin-top: 80px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}
</style>
