<template>
    <div :class="[task.reminder ? 'task reminder' : 'task']">
        <h3>{{ task.text }}
            <i @click="onDelete(task.id)" class="fas fa-times"></i>
        </h3>
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
    methods: {
        onDelete(id: string) {
            this.$emit("delete-task", id)
        }
    }
})
</script>

<style scoped>
.fas {
    color: red;
    cursor: pointer;
}

.task {
    background: #f4f4f4;
    border-radius: 0.5rem;
    margin: 5px;
    padding: 2rem;
}

.task.reminder {
    border-left: 5px solid green;
}

.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>