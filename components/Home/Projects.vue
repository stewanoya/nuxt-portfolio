<template>
  <section class="project-container">
    <div class="project-list">
      <article
        class="project-card shadow-lg"
        v-for="(project, index) in projectList"
        :key="project.id"
      >
        <div class="project-header">
          <div v-if="project.active" class="active-work shadow">
            Actively developing!
          </div>
          <h1 class="project-title">{{ project.name }}</h1>
          <img class="project-image" :src="project.image" />
        </div>
        <div
          :class="
            project.expanded ? 'project-body-show' : 'project-body-hidden'
          "
        >
          <div class="flex items-center justify-center gap-6">
            <a
              v-if="project.github"
              :href="project.github"
              class="project-link"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="github-icon"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            /></a>
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              class="demo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
          <p class="project-description">{{ project.desc }}</p>
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
        <div class="expand-button-container">
          <button
            :class="project.expanded ? 'up-arrow' : 'down-arrow'"
            @click="expand(index)"
          ></button>
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
  methods: {
    expand(index) {
      this.$store.commit('projects/toggleExpand', index)
    },
  },
}
</script>

<style scoped>
.active-work {
  position: absolute;
  transform: rotateZ(-35deg);
  left: -180px;
  z-index: 10;
  top: 35px;
  width: 30rem;
  background-color: #ffbe5e;
  text-align: center;
  font-size: 12px;
}
.project-container {
  background-color: #ffd9a0;
  height: min-content;
  min-height: 30rem;
  padding-inline: 5rem;
  padding-bottom: 4rem;
}
.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.project-card {
  background-color: white;
  margin: 1rem;
  height: fit-content;
  min-height: 13rem;
  border-radius: 2rem;
  max-width: 25rem;
  position: relative;
  flex-basis: 30%;
}

.project-header {
  width: 100%;
  overflow: hidden;
  height: 9.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 2rem 2rem 0 0;
  z-index: 1;
}

.project-title {
  text-align: center;
  font-family: 'Red Hat Text';
  font-weight: 800;
  font-size: 2.5rem;
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
  background-size: cover;
  top: 0;
  z-index: 1;
}

.project-header::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(3, 4, 15, 0.404);
  z-index: 2;
}

.project-header::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  z-index: 0;
}

.project-body-show {
  overflow-y: scroll;
  height: 8rem;
  padding: 1rem;
  animation: growDown 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

@keyframes growDown {
  from {
    margin-top: -8rem;
  }
  to {
    margin-top: 0;
  }
}

.project-body-hidden {
  visibility: hidden;
  height: 0rem;
  overflow: hidden;
  transition: height 0.5s ease;
}

.project-description {
  font-family: 'Quicksand';
  font-weight: 500;
  color: #413f4c;
  margin-bottom: 1rem;
  white-space: break-spaces;
}

.project-link {
  color: #ffbe5e;
  width: max-content;
}

.demo-link {
  font-size: 12px;
  padding: 5px;
  display: flex;
  align-items: center;
  color: #060411;
  aspect-ratio: 1;
  border-radius: 5000rem;
  background: rgb(189, 184, 219);
}

.github-icon {
  width: 3rem;
  aspect-ratio: 1;
}

.project-footer {
  background-color: white;
  position: relative;
  border-radius: 2rem;
  min-height: 5rem;
}

.tech-stack-list {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 1rem;
}

.tech-stack-item {
  font-size: 0.7rem;
  margin: 0.1rem;
  padding: 0.25rem;
  text-align: center;
  padding: 0.25rem 0.5rem;
  background-color: #ffbe5e;
  border-radius: 0.85rem;
  color: white;
  font-style: 'Red Hat Text';
  font-weight: 700;
  z-index: 5;
}

.expand-button-container {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -1rem;
  display: flex;
  justify-content: center;
}

.down-arrow {
  height: 2rem;
  width: 2rem;
  background-color: white;
  /* box-shadow: 0 0.5rem 0.8rem 0 rgba(0, 0, 0, 0.212); */
  border-radius: 50%;
  position: relative;
  z-index: 0;
  transition: transform 0.25s ease;
}

.down-arrow::before {
  content: '';
  position: absolute;
  width: 0.2rem;
  height: 0.75rem;
  top: 0.75rem;
  left: 0.65rem;
  background-color: black;
  transform: rotate(-45deg);
  border-radius: 1rem;
}
.down-arrow::after {
  content: '';
  position: absolute;
  width: 0.2rem;
  height: 0.75rem;
  right: 0.65rem;
  top: 0.75rem;
  background-color: black;
  transform: rotate(45deg);
  border-radius: 1rem;
}

.up-arrow {
  height: 2rem;
  width: 2rem;
  background-color: white;
  /* box-shadow: 0 -0.5rem 0.8rem 0 rgba(0, 0, 0, 0.212); */
  border-radius: 50%;
  position: relative;
  transform: rotate(180deg);
  z-index: 0;
  transition: transform 0.25s ease;
}

.up-arrow::before {
  content: '';
  position: absolute;
  width: 0.2rem;
  height: 0.75rem;
  top: 0.75rem;
  left: 0.65rem;
  background-color: black;
  transform: rotate(-45deg);
  border-radius: 1rem;
}
.up-arrow::after {
  content: '';
  position: absolute;
  width: 0.2rem;
  height: 0.75rem;
  right: 0.65rem;
  top: 0.75rem;
  background-color: black;
  transform: rotate(45deg);
  border-radius: 1rem;
}

@media (max-width: 760px) {
  .project-card {
    flex-basis: 100%;
  }
  .project-container {
    padding-inline: 1rem;
  }
}
</style>
