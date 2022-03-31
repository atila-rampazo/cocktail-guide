<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "container-component",
});
</script>
<style lang="scss">
@import "./style.scss";
</style>
