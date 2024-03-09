<template>
  <div>
    <label v-for="name in cityList" :key="name">
      <input type="radio" :value="name" v-model="picked" />{{ name }}
      <br />
    </label>
    <br />
    <label>선택한 지역 : {{ picked }}</label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picked: "",
      cityList: ["서울", "대전", "대구", "울산", "부산", "제주"],
    };
  },
};
</script>
