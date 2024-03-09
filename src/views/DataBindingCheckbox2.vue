<template>
    <div>
        <label v-for="name in cityList" :key="name">
            [<input type="checkbox" :value="name" v-model="checked"/> {{name}}]
            <br>
        </label>
        <br>
        <label>체크한 지역 : {{ checked }}</label>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checked : [],
                cityList : ["서울", "대전", "대구", "울산", "부산", "제주"]
            };
        }
    }
</script>
