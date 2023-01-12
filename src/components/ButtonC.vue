<template>
    <button @click="onClick" :style="{ background: color }" class="btn">
        {{ text }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name: "ButtonC",
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick() {
            console.log("clicked")
        }
    }
})
</script>