<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input
        type="text"
        name="text"
        v-model="formData.text"
        placeholder="Add Task"
      />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="date"
        name="day"
        v-model="formData.day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" name="reminder" v-model="formData.reminder" />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { FormDataInterface } from "../../types";
import format from "date-fns/format";
export default defineComponent({
  name: "AddTask",
  setup() {
    const formData: Ref<FormDataInterface> = ref({
      text: "",
      day: "",
      reminder: false,
    });
    return { formData };
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault();
      if (!this.formData.text || !this.formData.day) {
        if (this.formData.day) {
          alert("Please add a task");
        } else if (this.formData.text) {
          alert("Please add a day & time");
        } else {
          alert("Please add both task and day & time");
        }
        return;
      }
      const newTask: FormDataInterface = {
        text: this.formData.text,
        day: format(new Date(this.formData.day), "PPPp"),
        reminder: this.formData.reminder,
      };
      this.$emit("add-task", newTask);
      this.formData.text = "";
      this.formData.day = "";
      this.formData.reminder = false;
    },
  },
});
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
