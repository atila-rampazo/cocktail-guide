<template>
  <section class="search">
    <input
      type="search"
      placeholder="What drink do you want to drink today?"
      v-model="search"
      class="search__input"
    />
    <button class="search__button"><i class="fal fa-search"></i></button>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "search-component",
  setup() {
    const search = ref("");

    return {
      search,
    };
  },
});
</script>
<style lang="scss">
@import "./style.scss";
</style>
