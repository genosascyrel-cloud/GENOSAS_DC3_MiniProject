<template>
  <h1>Tourist Destinations</h1>

  <SearchBar v-model="search" />

  <CategoryFilter v-model="category" />

  <div class="cards">
    <DestinationCard
      v-for="place in filteredPlaces"
      :key="place.id"
      :destination="place"
    />
  </div>

  <p v-if="filteredPlaces.length === 0">
    No destinations found.
  </p>
</template>

<script setup>
import { ref, computed } from 'vue'
import { destinations } from '../data/destinations'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import DestinationCard from '../components/DestinationCard.vue'

const search = ref('')
const category = ref('All')

const filteredPlaces = computed(() => {
  return destinations.filter(place => {
    const matchesSearch = place.name
      .toLowerCase()
      .includes(search.value.toLowerCase())

    const matchesCategory =
      category.value === 'All' ||
      place.category === category.value

    return matchesSearch && matchesCategory
  })
})
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>