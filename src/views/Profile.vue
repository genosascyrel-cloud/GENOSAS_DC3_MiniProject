<template>
  <div class="profile">
    <div class="profile-header">
      <div class="avatar">👤</div>
      <h1>My Profile</h1>
      <p>Manage your personal information</p>
    </div>

    <form @submit.prevent="saveProfile">
      <label>Name</label>
      <input v-model="profile.name" type="text" placeholder="Enter your name">

      <label>Email</label>
      <input v-model="profile.email" type="email" placeholder="Enter your email">

      <label>Location</label>
      <input v-model="profile.location" type="text" placeholder="Enter your location">

      <label>About Me</label>
      <textarea v-model="profile.about" placeholder="Tell us about yourself"></textarea>

      <button type="submit">Save Profile</button>
    </form>

    <p v-if="saved" class="saved">Profile saved successfully!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const saved = ref(false)

const profile = ref(
  JSON.parse(localStorage.getItem('profile')) || {
    name: '',
    email: '',
    location: '',
    about: ''
  }
)

function saveProfile() {
  localStorage.setItem('profile', JSON.stringify(profile.value))
  saved.value = true

  setTimeout(() => {
    saved.value = false
  }, 2000)
}
</script>

<style scoped>
.profile {
  max-width: 600px;
  margin: auto;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 3px 12px #ddd;
}

.profile-header {
  text-align: center;
  margin-bottom: 30px;
}

.avatar {
  width: 90px;
  height: 90px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dcefe5;
  border-radius: 50%;
  font-size: 40px;
}

h1 {
  color: #176b4d;
}

label {
  display: block;
  margin-top: 15px;
  margin-bottom: 6px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
}

textarea {
  height: 100px;
  resize: vertical;
}

button {
  width: 100%;
  margin-top: 20px;
  padding: 13px;
  background: #176b4d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.saved {
  text-align: center;
  color: #176b4d;
  font-weight: bold;
}
</style>