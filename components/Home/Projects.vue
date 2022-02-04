<template>
  <section class="project-container">
    <div class="project-list">
      <article
        class="project-card shadow-lg"
        v-for="project in projectList"
        :key="project.id"
      >
        <div class="project-header" :style="{ backgroundImage: project.image }">
          <h1 class="project-title">{{ project.name }}</h1>
          <!-- <img class="project-image" src="" /> -->
        </div>
        <div class="project-body">
          <p class="project-description">{{ project.desc }}</p>
          <p class="project-link">{{ project.github }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    projectList() {
      return this.$store.state.projects.projectList
    },
  },
}
</script>

<style scoped>
.project-container {
  background-color: #ffd9a0;
  height: 34rem;
}
.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.project-card {
  background-color: white;
  margin: 1rem;
  border-radius: 0.25rem;
}

.project-header {
  padding: 1rem 2rem;
  width: 100%;
  background-color: #ffbe5e;
  text-align: center;
  font-family: 'Red Hat Text';
  font-weight: 600;
  font-size: 1.5rem;
  color: white;
}

.project-body {
  padding: 1rem 2rem;
}
</style>
