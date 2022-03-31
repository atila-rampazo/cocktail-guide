<template>
  <div class="banner">
    <logo-component />
    <search-component />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LogoComponent from "@/layouts/components/Logo/LogoComponent.vue";
import SearchComponent from "@/layouts/components/Search/SearchComponent.vue";
export default defineComponent({
  name: "header-component",
  components: {
    LogoComponent,
    SearchComponent,
  },
});
</script>
<style lang="scss">
@import "./style.scss";
</style>
