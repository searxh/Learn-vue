<template>
    <div class="task">
        <h3>{{ task.text }}</h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskItemInterface } from "types";
export default defineComponent({
    name: "TaskC",
    props: {
        task: {
            type: Object as () => TaskItemInterface,
            required: true,
        }
    },
})
</script>

<style>
.task {
    background: #f4f4f4;
    margin: 5px;
    padding: 2rem;
}
</style>