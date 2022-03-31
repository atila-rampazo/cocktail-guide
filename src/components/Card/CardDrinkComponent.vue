<template>
  <div class="card">
    <img
      src="https://www.thecocktaildb.com/images/media/drink/4vobt21643844913.jpg"
      alt=""
      class="card__image"
    />
    <h3 class="card__title">Cocktail Horse’s Neck</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "card-drink-component",
});
</script>
<style lang="scss">
@import "./style.scss";
</style>
