<template>
  <div v-if="place" class="details">
    <img :src="place.image" :alt="place.name">

    <div>
      <span>{{ place.category }}</span>
      <h1>{{ place.name }}</h1>
      <h3>📍 {{ place.location }}</h3>

      <p>{{ place.description }}</p>

      <h3>Activities</h3>
      <p>{{ place.activities }}</p>

      <button @click="toggleFavorite">
        {{ isFavorite ? '❤️ Remove Favorite' : '🤍 Add to Favorites' }}
      </button>
    </div>
  </div>

  <p v-else>Destination not found.</p>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { destinations } from '../data/destinations'

const route = useRoute()

const place = computed(() =>
  destinations.find(item => item.id === Number(route.params.id))
)

const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

const isFavorite = computed(() =>
  favorites.includes(place.value?.id)
)

function toggleFavorite() {
  const index = favorites.indexOf(place.value.id)

  if (index === -1) {
    favorites.push(place.value.id)
  } else {
    favorites.splice(index, 1)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
  location.reload()
}
</script>

<style scoped>
.details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: white;
  padding: 25px;
  border-radius: 15px;
}

.details img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 12px;
}

.details span {
  color: #176b4d;
}

button {
  padding: 12px 20px;
  background: #176b4d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>