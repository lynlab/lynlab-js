<template>
  <div id="navigation-bar">
    <ul id="left">
      <li v-for="menu in leftMenus" v-bind:key="menu.name" v-bind:class="{ primary: menu.isPrimary }">
        <a :href="menu.path">{{ menu.name }}</a>
      </li>
    </ul>
    <ul id="right">
      <li>
        <a href="#"><square-button name="LOGIN"/></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      leftMenus: [
        { name: 'LYnLab', path: '/', isPrimary: true },
        { name: 'Blog', path: '/blog' },
      ],
      rightMenus: [],
    };
  },
};
</script>

<style>
#navigation-bar {
  position: fixed;
  top: 0;
  height: 40px;
  width: 100%;
  padding: 20px 0;
  background-color: #FAFAFA;
  border-bottom: 1px #E0E0E0 solid;
}

#navigation-bar ul {
  margin: 0;
  list-style-type: none;
}

#navigation-bar ul#right {
  position: fixed;
  right: 30px;
  margin: 0;
  list-style-type: none;
}

#navigation-bar ul li {
  margin: 0 10px;
  float: left;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 40px;
  text-transform: uppercase;
}

#navigation-bar ul li.primary {
  font-weight: bold;
}
</style>
