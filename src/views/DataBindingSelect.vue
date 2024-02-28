<template>
  <div>
    <select v-model="city">
      <option v-for="name in cityList" :key="name" :value="name.value">
        {{ name.text }}
      </option>
    </select>
    <br />
    <select>
      <option>123</option>
      <option>456</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      city: "063",
      cityList: [
        { text: "서울", value: "062" },
        { text: "부산", value: "063" },
        { text: "제주", value: "064" },
      ],
    };
  },
};
</script>
