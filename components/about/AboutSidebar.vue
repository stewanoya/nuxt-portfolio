<template>
  <div class="sidebar__container">
    <img class="profile-picture" src="../../static/profile.jpg" />
    <ul class="contacts">
      <li>
        <img
          @click="navigate('github')"
          class="icon"
          src="../../static/icons/code-icon.svg"
        />
      </li>
      <li>
        <img
          @click="navigate('email')"
          class="icon"
          src="../../static/icons/mail-icon.svg"
        />
      </li>
    </ul>
    <p style="text-align: center; font-size: 14px">
      Software Developer @
      <span @click="navigate('bns')" class="organization"
        >Scotiabank</span
      >
    </p>
    <div class="skills__container">
      <div v-for="skill of skills" :key="skill.name" class="skill">
        <p>{{ skill.name }}</p>
        <div class="skillbar">
          <div class="skillbar__filled" :style="{ width: skill.skill }"></div>
        </div>
      </div>
    </div>
    <p style="margin-top: 1rem; margin-bottom: 1rem; text-align: center">
      Looking for my resume? Send me an email, and I can send it over.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutSidebar',
  data() {
    return {
      skills: [
        { name: 'JavaScript', skill: '85%' },
        { name: 'Angular', skill: '80%' },
        { name: 'C#', skill: '90%' },
        { name: 'TypeScript', skill: '85%' },
        { name: '.NET', skill: '85%' },
        { name: 'Vue', skill: '70%' },
        { name: 'SQL', skill: '75%' },
        { name: 'React', skill: '60%' },
        { name: 'Flutter', skill: '50%' },
        { name: 'React Native', skill: '50%' },
      ],
    }
  },
  methods: {
    navigate(type) {
      if (type === 'github') {
        window.open('https://github.com/stewanoya', '_blank')
        return
      }

      if (type === 'bns') {
        window.open('https://www.scotiabank.com/', '_blank')
        return
      }

      window.location = 'mailto:stew@anoya.ca'
    },
  },
}
</script>

<style>
.skills__container {
  margin-top: 1rem;
  padding: 10px 20px;
  align-items: flex-start;
  width: 80%;
  background-color: #ffd9a0;
  border-radius: 10px;
}
.sidebar__container {
  height: auto;
  display: flex;
  padding-inline: 1rem;
  flex-direction: column;
  align-items: center;
}

.skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  gap: 10px;
  font-size: 12px;
}

.skillbar {
  position: relative;
  width: 60%;
  height: 8px;
  border-radius: 1000rem;
  background-color: white;
}

.skillbar:after {
  content: '';
  width: 100%;
  height: 8px;
  border-radius: 1000rem;
  z-index: 2;
  position: absolute;
  left: 0;
  background-color: white;
  transform-origin: right;
  animation: shrink 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards;
}

@keyframes shrink {
  from {
    transform: scaleX(100%);
  }

  to {
    transform: scaleX(0%);
  }
}

.skillbar__filled {
  position: absolute;
  left: 0;
  top: 0;
  height: 8px;
  border-radius: 1000rem;
  background-color: #080518;
  z-index: 1;
}
.contacts {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
.organization {
  text-decoration: underline;
  cursor: pointer;
}
.profile-picture {
  width: 70%;
  border-radius: 1000rem;
  aspect-ratio: 1;
  border: 4px solid orange;
  -moz-box-shadow: 0px 1px 5px 0px #676767;
  -webkit-box-shadow: 0px 1px 5px 0px #676767;
  box-shadow: 0px 1px 5px 0px #676767;
}
.icon {
  width: 3rem;
  padding: 10px;
  border-radius: 100%;
  transition: background-color 0.25s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.icon:hover {
  background-color: #ffbe5e;
  border-radius: 100%;
  transition: background-color 0.25s cubic-bezier(0.47, 0, 0.745, 0.715);
  cursor: pointer;
}

@media (max-width: 1300px) {
  .skill {
    flex-direction: column;
    text-align: center;
  }

  .profile-picture {
    max-width: 10rem;
  }

  .skillbar {
    width: 90%;
  }
}
</style>
