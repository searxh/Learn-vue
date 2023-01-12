<template>
    <h3>{{ task.text }}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskItemInterface } from "types";
export default defineComponent({
    name: "Task",
    props: {
        task: {
            type: Object as () => TaskItemInterface,
            required: true,
        }
    },
})
</script>