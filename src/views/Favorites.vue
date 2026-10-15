<template>
  <h1>❤️ My Favorites</h1>

  <div v-if="favoritePlaces.length" class="cards">
    <DestinationCard
      v-for="place in favoritePlaces"
      :key="place.id"
      :destination="place"
    />
  </div>

  <p v-else>
    You have no favorite destinations yet.
  </p>
</template>

<script setup>
import { computed } from 'vue'
import { destinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard.vue'

const favoriteIds = JSON.parse(
  localStorage.getItem('favorites') || '[]'
)

const favoritePlaces = computed(() =>
  destinations.filter(place => favoriteIds.includes(place.id))
)
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>