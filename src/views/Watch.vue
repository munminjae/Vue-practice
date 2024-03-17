<template>
    <h1>Full Name : {{ fullName }}</h1>
    <input type="text" v-model="newName">
    <button @click="changeName(newName)">이름 변경</button>
</template>

<script>
    export default {
        data() {
            return {
                firstName: 'MinJae',
                lastName: 'Mun',
                newName: '',
                fullName: ''
            };
        },
        watch: {
            firstName() {
                this.fullName = this.firstName + ' ' + this.lastName;
            },
            lastName() {
                this.fullName = this.firstName + ' ' + this.lastName;
            }
        },
        methods: {
            changeName(value) {
                this.fullName = value;
            }
        }
    }
</script>
