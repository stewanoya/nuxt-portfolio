<template>
  <div class="about__main-container">
    <AboutSidebar class="sidebar" />
    <AboutStory class="story" />
  </div>
</template>

<script setup></script>

<script>
export default {}
</script>

<style>
.about__main-container {
  display: flex;
  padding-top: 80px;
  height: calc(100vh - 44px);
  overflow-y: scroll;
}

.sidebar {
  width: 25%;
  height: 100%;
  padding-top: 80px;
}

@media (max-width: 850px) {
  .about__main-container {
    flex-direction: column-reverse;
    align-items: center;
  }
  .sidebar {
    margin-top: 1rem;
    width: 100%;
    height: auto;
  }
  .about__main-container {
    padding-top: 100px;
    padding-bottom: 2rem;
    overflow-y: scroll;
  }
}
</style>
