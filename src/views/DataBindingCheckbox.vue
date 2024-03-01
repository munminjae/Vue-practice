<template>
    <div>
        <label><input type="checkbox" v-model="checked">{{ checkedText }}</label>
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