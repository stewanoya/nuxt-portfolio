<template>
  <nav class="nav-container">
    <ul class="nav-list rounded-full shadow-lg">
      <nuxt-link
        v-for="(navItem, index) in navList"
        :key="index"
        class="nav-item"
        :to="navItem.route"
        v-on:click.native="selector(index)"
      >
        <li>
          {{ navItem.name }}
        </li>
        <div
          class="shadow-2xl"
          :class="{ navSelected: selected === index }"
        ></div>
      </nuxt-link>
      <li class="nav-item">
        <a href="https://blog.anoya.ca">Blog</a>
      </li>
      <li class="nav-item">
        <a href="https://linkedin.com/in/stewanoya" target="_blank">LinkedIn</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    let path = window.location.pathname
    if (path.includes('about')) {
      this.$store.commit('nav/setSelected', 1)
    }
  },
  computed: {
    navList() {
      return this.$store.state.nav.navList
    },
    selected() {
      return this.$store.state.nav.selected
    },
  },
  methods: {
    selector(index) {
      this.$store.commit('nav/setSelected', index)
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
  background-color: rgba(255, 255, 255, 0);
  animation: slideinNav 2s ease-in-out;
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
  width: 50%;
  min-width: 25rem;
  max-width: 35rem;
  background-color: red;
  padding: 1.5rem 6rem;
  background-color: #ffbe5e;
  z-index: 999999;
  position: sticky;
  overflow: hidden;
}

.nav-item {
  margin-inline: 1rem;
  font-family: 'Quicksand';
  font-weight: 600;
  color: #413f4c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.navSelected {
  background-color: #ffd9a0;
  width: 4rem;
  height: 0.25rem;
  border-radius: 20px;
  position: absolute;
  bottom: 1.25rem;
  z-index: -1;
  animation: grow 0.2s ease-in-out;
}

@keyframes grow {
  from {
    width: 0;
  }
  to {
    width: 4rem;
  }
}
</style>
