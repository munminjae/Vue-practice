<template>
    <div>
        <button type="button" @click="increaseCounter(2), message()">Add 2</button>
        <p>The counter is : {{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            increaseCounter(value) {
                this.counter = this.counter+value;
            },
            message() {
                alert("+2");
            }
        }
    }
</script>
