<template>
  <a href="#" class="profile-card">
    <div class="profile-card-image">
      <img
        src="https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg"
        alt=""
      />
    </div>
    <div class="profile-card-user-info">
      <p class="profile-card-name">Fotis Adamakis</p>
      <p class="profile-card-username">@fadamakis</p>
    </div>
  </a>
</template>

<style>
.profile-card {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.profile-card-image {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
}

.profile-card-user-info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-left: 10px;
  color: #14171a;
}

.profile-card-name {
  font-weight: bold;
}

.profile-card-username {
  color: #657786;
}
</style>
