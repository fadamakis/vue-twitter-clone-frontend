<template>
  <button class="button">
    <slot />
  </button>
</template>

<style>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #33a1f2;
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  outline: 0;
}
</style>
