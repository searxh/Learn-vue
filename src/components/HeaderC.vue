<template>
    <header>
        <h1>{{ title }}</h1>
        <ButtonC />
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonC from "./ButtonC.vue"
export default defineComponent({
    name: "HeaderC",
    components: {
        ButtonC
    },
    props: {
        title: String,
    },
})
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>