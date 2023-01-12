<template>
    <ul>
        <li v-for="(task, index) in tasks" :key="index">
            <h3>{{ task.text }}</h3>
        </li>
    </ul>
</template>

<script lang="ts">
import { TaskItemInterface } from "types";
import { defineComponent } from "vue";
export default defineComponent({
    name: "TasksC",
    props: {
        tasks: {
            type: Array as () => Array<TaskItemInterface>,
            required: true,
        }
    },
})
</script>