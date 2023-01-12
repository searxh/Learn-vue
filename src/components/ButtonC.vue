<template>
    <button :style="{ background: color }" class="btn">
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
})
</script>