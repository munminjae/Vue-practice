<template>
  <!--view에 해당하는 html 코드를 작성하는 영역-->
  <div></div>
</template>
<script>
export default {
  name: "", //컴포넌트 이름(없어도 괜찮다.)
  components: {}, //외부 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
  data() {
    //html과 자바스크립트 코드에서 사용할 데이터 변수 선언. this를 통해서 접근
    return {
      sampleData: "",
    };
  },
  setup() {}, //컴포지션 API
  created() {}, //컴포넌트가 생성되면 실행
  mounted() {}, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {}, //unmount가 완료된 후 실행 = 컴포넌트를 빠져나갈때 실행
  methods: {}, //컴포넌트 내에서 사용할 메소드 정의. this를 통해서 접근
};
</script>
