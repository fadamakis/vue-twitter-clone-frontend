<script setup>
import AppIcon from "@/components/AppIcon.vue";
</script>
<template>
  <div class="container">
    <header>
      <AppIcon icon="twitter" size="5x" />
      <h1><slot name="title" /></h1>
    </header>
    <slot />

    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  padding: spacing(2);
  width: spacing(120);
  margin: spacing(5) auto;
}

header {
  display: flex;
  flex-direction: column;
  gap: spacing(4);
  margin: spacing(8);
  align-items: center;
}

h1 {
  font-size: $font-size-5;
  font-weight: bold;
}
footer {
  padding: spacing(2) 0;
  margin-top: spacing(4);
  text-align: center;

  font-size: $font-size-0;
  :slotted(a) {
    color: $color-primary;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
