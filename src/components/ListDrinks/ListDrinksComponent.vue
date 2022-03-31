<template>
  <div class="list_drinks">
    <card-drink-component />
    <card-drink-component />
    <card-drink-component />
    <card-drink-component />
    <card-drink-component />
    <card-drink-component />
    <card-drink-component />
    <card-drink-component />
    <card-drink-component />
    <card-drink-component />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CardDrinkComponent from "@/components/Card/CardDrinkComponent.vue";
export default defineComponent({
  name: "list-drinks-component",
  components: {
    CardDrinkComponent,
  },
});
</script>
<style lang="scss">
@import "./style.scss";
</style>
