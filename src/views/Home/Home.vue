<template>
  <container-component class="wrapper_content">
    <h1 class="wrapper__title">
      Last Drinks <2021>
      <small class="wrapper__subtitle">List most latest cocktails</small>
    </h1>
    <list-drinks-component />
  </container-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContainerComponent from "../../components/Container/ContainerComponent.vue";
import ListDrinksComponent from "@/components/ListDrinks/ListDrinksComponent.vue";
export default defineComponent({
  name: "Home",
  components: {
    ContainerComponent,
    ListDrinksComponent,
  },
});
</script>
<style lang="scss">
@import "./style.scss";
</style>
