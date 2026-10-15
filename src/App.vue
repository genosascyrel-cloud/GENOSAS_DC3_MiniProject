<template>
  <Navbar />

  <main>
    <RouterView />
  </main>

  <footer>
    
  </footer>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f7f2;
  color: #333;
}

main {
  min-height: 80vh;
  padding: 30px 8%;
}

footer {
  text-align: center;
  padding: 25px;
  background: #176b4d;
  color: white;
}
</style>