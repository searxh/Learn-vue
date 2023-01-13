<template>
  <div class="container">
    <HeaderC
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <TasksC
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
      :tasks="tasks"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import HeaderC from "./components/HeaderC.vue";
import TasksC from "./components/TasksC.vue";
import AddTask from "./components/AddTask.vue";
import { TaskItemInterface } from "../types";
export default defineComponent({
  name: "App",
  components: {
    HeaderC,
    TasksC,
    AddTask,
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
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
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
    const showAddTask = ref(false);
    return { tasks, showAddTask };
  },
  mounted() {
    this.fetchTasks();
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
