<template>
  <div class="card">
    <img :src="destination.image" :alt="destination.name">

    <div class="content">
      <span>{{ destination.category }}</span>
      <h2>{{ destination.name }}</h2>
      <p>📍 {{ destination.location }}</p>
      <p>{{ destination.description }}</p>

      <RouterLink :to="`/destination/${destination.id}`">
        View Details →
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  destination: Object
})
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 12px #ddd;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.content {
  padding: 18px;
}

.content span {
  color: #176b4d;
  font-size: 14px;
}

h2 {
  margin: 8px 0;
}

a {
  color: #176b4d;
  font-weight: bold;
  text-decoration: none;
}
</style>