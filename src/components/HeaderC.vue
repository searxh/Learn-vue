<template>
    <header>
        <h1>Task tracker</h1>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "HeaderC"
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