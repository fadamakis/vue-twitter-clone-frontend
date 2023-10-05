<script setup lang="ts">
const messages = [
  {
    text: "Hello World!",
    date: "16 April",
  },
  {
    text: "Hello World!",
    date: "16 April",
    type: "reply",
  },
  {
    text: "Hello World!",
    date: "16 April",
    type: "reply",
  },
  {
    text: "Hello World!",
    date: "16 April",
    type: "reply",
  },
];
</script>

<template>
  <div class="message-list">
    <div v-for="message in messages" :class="message.type">
      <div class="message">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-list {
  flex: 1;
  justify-content: end;
  display: flex;
  flex-direction: column;
}

.message-list > :not(.reply) {
  display: flex;
  justify-content: flex-end;
}
.message {
  display: inline-flex;
  padding: spacing(3);
  border-bottom: 1px solid $color-border;
  background: $color-primary;
  color: $color-white;
  border-radius: spacing(6);
  border-bottom-right-radius: spacing(1);
  margin: spacing(2);

  .reply & {
    background: $color-light;
    color: $color-dark;
    border-bottom-right-radius: spacing(6);
    border-bottom-left-radius: spacing(1);
  }
}
</style>
