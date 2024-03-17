<template>
    <h1>Full Name : {{ fullName }}</h1>
</template>

<script>
    export default {
        data() {
            return {
                firstName: 'MinJae',
                lastName: 'Mun'
            };
        },
        computed: {
            fullName() {
                return this.firstName + ' ' + this.lastName;
            }
        }
    }
</script>
