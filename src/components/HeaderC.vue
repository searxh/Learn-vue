<template>
    <header>
        <h1>{{ title }}</h1>
        <ButtonC @toggle-add-task="$emit('toggle-add-task')" text="Add Task" color="green" />
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
        title: {
            type: String,
            required: true,
        }
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