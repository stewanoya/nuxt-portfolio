<template>
  <section class="project-container">
    <div class="project-list">
      <article
        class="project-card shadow-lg"
        v-for="project in projectList"
        :key="project.id"
      >
        <div class="project-header">
          <h1 class="project-title">{{ project.name }}</h1>
          <img class="project-image" :src="project.image" />
        </div>
        <div class="project-body">
          <a
            :href="project.github"
            class="project-link"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              class="github-icon"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          /></a>
          <p class="project-description not-shown">{{ project.desc }}</p>
        </div>
        <div class="project-footer">
          <ul class="tech-stack-list">
            <li
              class="tech-stack-item"
              v-for="stackItem in project.techStack"
              :key="stackItem"
            >
              {{ stackItem }}
            </li>
          </ul>
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
  height: min-content;
  padding-inline: 5rem;
  padding-bottom: 4rem;
}
.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.project-card {
  background-color: white;
  margin: 1rem;
  border-radius: 0.25rem;
  height: 25rem;
  position: relative;
}

.project-header {
  width: 100%;
  height: 9.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 0.25rem 0.25rem 0 0;
}

.project-title {
  text-align: center;
  font-family: 'Red Hat Text';
  font-weight: 800;
  font-size: 3rem;
  color: white;
  width: 100%;
  color: white;
  position: relative;
  z-index: 10;
}

.project-image {
  z-index: 0;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
}

.project-header::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(3, 4, 15, 0.404);
  z-index: 1;
}

.project-header::after {
  content: '';
  position: absolute;
  height: 5rem;
  width: 33rem;
  bottom: -4rem;
  left: -6rem;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  z-index: 1;
  box-shadow: 0 -1rem 3rem 0.05rem rgba(15, 15, 15, 0.562);
}

.project-body {
  padding: 1rem 2rem;
  height: 10rem;
  overflow: hidden;
  overflow-y: scroll;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.project-body::-webkit-scrollbar {
  display: none;
}

.project-card::before {
  content: '';
  position: absolute;
  bottom: 5.5rem;
  left: 0;
  height: 12%;
  width: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.705),
    rgba(255, 255, 255, 0.829),
    rgb(255, 255, 255)
  );
  z-index: 10;
}

.project-description {
  font-family: 'Quicksand';
  font-weight: 500;
  color: #413f4c;
  margin-bottom: 1rem;
}

.project-link {
  color: #ffbe5e;
  width: max-content;
  display: block;
  margin: 0.5rem auto;
  margin-top: -1rem;
}
.github-icon {
  width: 3rem;
  aspect-ratio: 1;
}

.project-footer {
  background-color: white;
  padding: 1rem 2rem;
}

.tech-stack-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.tech-stack-item {
  font-size: 0.6rem;
  margin: 0.1rem;
  height: min-content;
  text-align: center;
  padding: 0.25rem 0.5rem;
  background-color: #ffbe5e;
  border-radius: 0.85rem;
  color: white;
  font-style: 'Red Hat Text';
  font-weight: 900;
}
</style>
