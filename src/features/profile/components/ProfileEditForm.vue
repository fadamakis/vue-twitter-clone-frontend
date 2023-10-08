<script setup>
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";
import { UserAvatar } from "@/features/profile";
import ImageEditable from "./ImageEditable.vue";
</script>

<template>
  <ImageEditable>
    <img
      src="https://pbs.twimg.com/profile_banners/525193422/1633505307/600x200"
      alt=""
      class="banner"
    />
  </ImageEditable>
  <div class="user-avatar-wrapper">
    <ImageEditable>
      <UserAvatar
        size="xl"
        img="https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_400x400.jpg"
        class="avatar"
      />
    </ImageEditable>
  </div>

  <AppInput value="Fotis Adamakis" placeholder="Full Name">
    <template #label> Full Name </template>
  </AppInput>
  <AppInput
    value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti laboriosam eligendi. Incidunt dolores dicta veritatis. Quaerat ad, magnam esse, illo atque delectus minus, nihil adipisci tempora nobis iusto. Excepturi?"
    placeholder="Bio"
  >
    <template #label> Bio </template>
  </AppInput>
  <AppInput value="Barcelona" placeholder="Location">
    <template #label> Location </template>
  </AppInput>

  <AppInput value="fadamakis.com" placeholder="Website">
    <template #label> Website </template>
  </AppInput>
  <div class="cta-button">
    <AppButton> Save </AppButton>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 200px;
  object-fit: cover;
  position: relative;
}

.user-avatar-wrapper {
  position: relative;
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin: spacing(-16) spacing(4) spacing(2);
}
.avatar {
  border: spacing(1) solid $color-white;
}
.cta-button {
  display: flex;
  justify-content: flex-end;
  margin-top: spacing(4);
}
</style>
