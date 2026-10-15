<template>
  <section class="hero">
    <div>
      <h1>Discover Bohol</h1>
      <p>Explore the beautiful tourist destinations of Bohol.</p>

      <RouterLink to="/destinations">
        Explore Destinations
      </RouterLink>
    </div>
  </section>

  <h2>Popular Destinations</h2>

  <div class="cards">
    <DestinationCard
      v-for="place in featured"
      :key="place.id"
      :destination="place"
    />
  </div>
</template>

<script setup>
import { destinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard.vue'

const featured = destinations.slice(0, 3)
</script>

<style scoped>
.hero {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #dcefe5;
  border-radius: 15px;
  margin-bottom: 40px;
  
   background-image:
    linear-gradient(rgba(77, 76, 76, 0.45), rgba(74, 74, 74, 0.45)),
    url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8vuxZGHM9nPqSMpe0YGPPLW6xt372miNCbuCTSZRuLW1K4rFQFIjIJ4&s=10');

  background-size: cover;
  background-position: center;
  color: white;
}

.hero h1 {
  font-size: 50px;
  color: #053f2e;
}

.hero p {
  font-size: 20px;
}

.hero a {
  display: inline-block;
  margin-top: 15px;
  padding: 13px 22px;
  background: #176b4d;
  color: white;
  text-decoration: none;
  border-radius: 8px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>