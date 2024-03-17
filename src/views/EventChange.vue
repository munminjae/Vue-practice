<template>
    <select v-model="selectedValue" @change="changeSelect">
        <option v-for="area in selectList" :key="area" :value="area.value">
            {{ area.text }}
        </option>
    </select>
    <button @click="selectedValue=''">reset</button>

</template>

<script>
    export default {
        data() {
            return {
                selectedValue: '',
                selectList: [
                    {'text':'선택', 'value':''},
                    {'text':'서울', 'value':'서울'},
                    {'text':'부산', 'value':'부산'},
                    {'text':'제주', 'value':'제주'}
                ],
            }
        },
        methods: {
            changeSelect() {
                if(this.selectedValue!='') alert(this.selectedValue);
            }
        }
    }
</script>
