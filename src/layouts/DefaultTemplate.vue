<template>
  <div>
    <header-component></header-component>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import HeaderComponent from "./components/Header/HeaderComponent.vue";

export default defineComponent({
  name: "Home",
  setup() {
    onBeforeMount(() => {
      document.title = "Cocktail Guide";
    });
  },
  components: {
    HeaderComponent,
  },
});
</script>
