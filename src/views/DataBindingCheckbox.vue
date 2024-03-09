<template>
    <div>
        <label><input type="checkbox" v-model="checked" value="서울">{{ checked }}</label>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checked : true,
                checkedText : "checked"
            };
        }
    }
</script>