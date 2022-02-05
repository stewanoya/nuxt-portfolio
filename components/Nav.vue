<template>
  <nav class="nav-container">
    <ul class="nav-list rounded-full shadow-lg">
      <nuxt-link
        v-for="(navItem, index) in navList"
        :key="index"
        class="nav-item"
        :to="navItem.route"
      >
        <li :class="{ navSelected: selected === index }">{{ navItem.name }}</li>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    navList() {
      return this.$store.state.nav.navList
    },
    selected() {
      return this.$store.state.nav.selected
    },
  },
}
</script>

<style scoped>
.nav-container {
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideinNav 4s ease-in-out;
}

@keyframes slideinNav {
  from {
    transform: translateY(-10rem);
  }
  to {
    transform: translateY(0);
  }
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  background-color: red;
  padding: 1.5rem 6rem;
  background-color: #ffbe5e;
  z-index: 999999;
  position: sticky;
}

.nav-item {
  margin-inline: 1rem;
  font-family: 'Quicksand';
  font-weight: 600;
  color: #413f4c;
}

.navSelected {
  background-color: red;
}
</style>
