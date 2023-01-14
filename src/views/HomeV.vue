<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <TasksC
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
    :tasks="tasks"
  />
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import TasksC from "../components/TasksC.vue";
import AddTask from "../components/AddTask.vue";
import { TaskItemInterface } from "../../types";
export default defineComponent({
  name: "HomeV",
  components: {
    TasksC,
    AddTask,
  },
  props: {
    showAddTask: Boolean,
  },
  methods: {
    async deleteTask(id: string) {
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          this.tasks = this.tasks.filter(
            (taskItem: TaskItemInterface) => taskItem.id !== id
          );
        } else {
          alert("There was an error deleting the task");
        }
      }
    },
    async toggleReminder(id: string) {
      const taskIndex = this.tasks.findIndex(
        (taskItem: TaskItemInterface) => taskItem.id === id
      );
      const selectedTask = this.tasks[taskIndex];
      const oldReminder = selectedTask.reminder;
      if (taskIndex !== -1) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            reminder: !oldReminder,
          }),
        });
        if (res.status === 200) {
          this.tasks[taskIndex] = {
            ...selectedTask,
            reminder: !oldReminder,
          };
        } else {
          alert("There was an error updating the task");
        }
      }
    },
    async addTask(newTask: TaskItemInterface) {
      const res = await fetch("api/tasks/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      const data = await res.json();
      this.tasks.push(data);
    },
    async fetchTasks() {
      const res = await fetch(`api/tasks`);
      this.tasks = await res.json();
    },
    async fetchTask(id: string) {
      const res = await fetch(`api/tasks/${id}`);
      this.tasks = await res.json();
    },
  },
  setup() {
    const tasks: Ref<Array<TaskItemInterface>> = ref([{} as TaskItemInterface]);
    return { tasks };
  },
  created() {
    this.fetchTasks();
  },
});
</script>
