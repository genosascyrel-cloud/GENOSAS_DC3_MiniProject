<template>
  <nav>
    <RouterLink to="/" class="logo">
        BOHOL TOURIST GUIDE
    </RouterLink>

    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/destinations">Destinations</RouterLink>
      <RouterLink to="/manage-destinations">Manage</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 8%;
  background: #176b4d;
}

.logo {
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
}

.links {
  display: flex;
  gap: 25px;
}

.links a {
  color: white;
  text-decoration: none;
}

.links a.router-link-active {
  font-weight: bold;
}
</style>