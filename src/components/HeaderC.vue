<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonC
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonC from "./ButtonC.vue";
export default defineComponent({
  name: "HeaderC",
  components: {
    ButtonC,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showAddTask: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    homePage() {
      return this.$router.currentRoute.value.path === "/";
    },
  },
});
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
