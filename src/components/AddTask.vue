<template>
    <form class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input type="text" name="text" v-model="formData.text" placeholder="Add Task" />
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input type="text" name="day" v-model="formData.day" placeholder="Add Day & Time" />
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
export default defineComponent({
    name: "AddTask",
    setup() {
        const formData: Ref<FormDataInterface> = ref(
            {
                text: "Test",
                day: "",
                reminder: false,
            }
        )
        return { formData };
    },
})
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