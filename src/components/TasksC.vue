<template>
    <ul>
        <li v-for="(task, index) in tasks" :key="index">
            <Task :task="task" />
        </li>
    </ul>
</template>

<script lang="ts">
import { TaskItemInterface } from "types";
import { defineComponent } from "vue";
import Task from "./Task.vue"
export default defineComponent({
    name: "TasksC",
    components: {
        Task
    },
    props: {
        tasks: {
            type: Array as () => Array<TaskItemInterface>,
            required: true,
        },
    },
})
</script>