<template>
  <main class="hero-container">
    <div class="first-name">
      STEW
      <div class="adjectives-first">
        <p style="white-space: nowrap">Software Developer</p>
        <p>Educator</p>
        <p>Mentor</p>
      </div>
    </div>
    <div class="last-name">
      <div class="adjectives-last">
        <p>Learner</p>
        <p>Coach</p>
        <p>Creator</p>
      </div>
      ANOYA
    </div>
    <div class="right-big-circle shadow-xl"></div>
    <div class="right-small-circle"></div>
    <div class="subheading mt-20 px-6 py-2 round shadow">
      👋 Welcome! Check out my personal projects below, or head to my
      <a style="text-decoration: underline" href="/about">about</a> page to get
      in touch.
    </div>
    <div class="bottom-circle">
      <h1 class="projects-title">PROJECTS</h1>
    </div>
  </main>
</template>

<style scoped>
.hero-container {
  height: calc(100vh - 5rem);
  width: 100%;
  margin-top: 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-big-circle {
  width: 16rem;
  height: 16rem;
  background-color: #ffd9a0;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -8rem;
  z-index: 5;
  animation: fade 2s ease-in-out, float1 6s ease-in-out infinite;
}

@keyframes float1 {
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(5px, 10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.right-small-circle {
  width: 6rem;
  height: 6rem;
  background-color: #ffbe5e;
  border-radius: 50%;
  position: absolute;
  top: 0rem;
  right: 5rem;
  z-index: 1;
  animation: fade 5s ease-in-out, float2 6s ease-in-out infinite;
}

@keyframes float2 {
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(-15px, 10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.first-name,
.last-name {
  font-family: 'Red Hat Text';
  font-size: 8rem;
  font-weight: 700;
  line-height: 1;
  width: 47.5rem;
  color: #413f4c;
}

.first-name {
  display: flex;
  text-align: left;
  justify-content: flex-start;
  z-index: 10;
  margin-top: 5rem;
  margin-inline: 1rem;
  animation: fadeinRight 1s ease-in-out;
}

@keyframes fadeinRight {
  from {
    transform: translateX(-3rem);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.last-name {
  text-align: right;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  animation: fadeinLeft 1s ease-in-out;
}
@keyframes fadeinLeft {
  from {
    transform: translateX(3rem);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.adjectives-first,
.adjectives-last {
  width: 10rem;
  display: flex;
  flex-direction: column;
  font-family: 'Quicksand';
  font-size: 1.25rem;
  justify-content: space-evenly;
  margin-inline: 0.5rem;
}

.adjectives-first {
  animation: fadeinRight 2s ease-in-out;
}

.adjectives-last {
  animation: fadeinLeft 2s ease-in-out;
}

.bottom-circle {
  width: 100%;
  height: 14rem;
  background-color: #ffd9a0;
  border-radius: 50%;
  position: absolute;
  bottom: -7rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transform: translateY(10rem);
  animation: fadeinUp 2s ease-in-out forwards;
  animation-delay: 2s;
}

.subheading {
  animation: fade 2s ease-in-out;
  background-color: rgb(189, 184, 219);
}

@keyframes fadeinUp {
  from {
    transform: translateY(10rem);
  }
  to {
    transform: translateY(0);
  }
}

.projects-title {
  font-family: 'Red Hat Text';
  font-weight: 900;
  color: white;
  font-size: 5rem;
  margin-top: -1rem;
}

@media (max-width: 760px) {
  .first-name,
  .last-name {
    font-size: 4rem;
    width: 20rem;
  }

  .adjectives-first,
  .adjectives-last {
    font-size: 0.75rem;
  }

  .subheading {
    margin-inline: 14px;
  }
  .projects-title {
    font-size: 2rem;
    margin-top: 1rem;
  }
}
</style>
