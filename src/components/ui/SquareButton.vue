<template>
  <button id="square-button" type="button">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'SquareButton',
  props: ['name'],
};
</script>

<style>
#square-button {
  background-color: #00000000;
  padding: 0 14px;
  font-size: 14px;
  line-height: 36px;
  border: #212121 2px solid;
}

#square-button:hover {
  background-color: #212121;
  color: #FAFAFA;
  cursor: pointer;
}
</style>
