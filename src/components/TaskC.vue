<template>
  <div
    @dblclick="onToggleRequired(task.id)"
    :class="[task.reminder ? 'task reminder' : 'task']"
  >
    <h3>
      {{ task.text }}
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
    },
  },
  methods: {
    onDelete(id: string) {
      this.$emit("delete-task", id);
    },
    onToggleRequired(id: string) {
      this.$emit("toggle-reminder", id);
    },
  },
});
</script>

<style scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  border-radius: 0.5rem;
  margin: 5px;
  padding: 2rem;
  transition: scale 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;
  border-left: 5px solid transparent;
}

.task:hover {
  background: #f4f4f4;
  scale: 1.02;
  border-radius: 0.5rem;
  margin: 5px;
  padding: 2rem;
  border-left: 5px solid transparent;
  transition: border-color 0.2s ease-in-out;
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
