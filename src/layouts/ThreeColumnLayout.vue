<script setup lang="ts">
import { AppNavigation } from "@/features/navigation";
import { ProfileCard } from "@/features/profile";
import AppFooter from "@/components/AppFooter.vue";
import AppLogo from "@/components/AppLogo.vue";
</script>

<template>
  <div class="page">
    <header>
      <AppLogo />
      <AppNavigation />
      <ProfileCard />
    </header>

    <main>
      <slot />
    </main>

    <aside>
      <slot name="sidebar" />
      <AppFooter />
    </aside>
  </div>
</template>

<style>
.page {
  height: 100%;
  max-width: 1280px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
}

header {
  flex-basis: 20%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 100vh;
}

main {
  flex-basis: 50%;
  border-right: 1px solid rgb(239, 243, 244);
  border-left: 1px solid rgb(239, 243, 244);
}

aside {
  flex-basis: 30%;
  padding: 12px;
}
</style>
