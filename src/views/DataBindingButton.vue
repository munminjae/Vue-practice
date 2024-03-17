<template>
    <div>
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue==''" v-on:click="buttonYn=true">Click</button>
        <button type="button" v-bind:disabled="buttonYn==false" @click="buttonYn=false">확인</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                textValue: "",
                buttonYn: false,
            }
        }
    }
</script>
