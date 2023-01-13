<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <TaskC
        @delete-task="$emit('delete-task', task.id)"
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        :task="task"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { TaskItemInterface } from "types";
import { defineComponent } from "vue";
import TaskC from "./TaskC.vue";
export default defineComponent({
  name: "TasksC",
  components: {
    TaskC,
  },
  props: {
    tasks: {
      type: Array as () => Array<TaskItemInterface>,
      required: true,
    },
  },
});
</script>
