<template>
  <div id="error-view">
    <i class="fas fa-exclamation-triangle"></i>
    <h1 id="error-message">{{ message || '알 수 없는 오류' }}</h1>
    <p id="error-hint">올바른 주소인지 확인 후 다시 시도해주세요.</p>
    <span v-on:click="goBack()"><square-button name="뒤로가기" /></span>
  </div>
</template>

<script>
import router from '../router';

export default {
  props: ['message'],
  methods: {
    goBack() {
      router.go(-1);
    },
  },
};
</script>

<style>
#error-view {
  padding: 100px 0;
  text-align: center;
}

#error-view i {
  font-size: 72px;
}

#error-message {
  margin-bottom: 0;
}

#error-hint {
  margin: 4px 0 24px 0;
}
</style>

