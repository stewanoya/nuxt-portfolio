// state

export const state = () => ({
  projectList: [
    {
      id: 1,
      name: 'sQuiz Game',
      image:
        'https://raw.githubusercontent.com/stewanoya/sQuiz-Game/master/docs/homepage.png',
      desc: 'sQuiz Game is an app that allows users to make quizzes, take quizzes and share results with friends. A user can search for quizzes, as well as make their quizzes public or private. Users can see the results of their recent attempt and share that result with friends.',
      github: 'https://github.com/stewanoya/sQuiz-Game',
      techStack: ['jQuery', 'Express', 'SASS', 'Node', 'PSQL', 'EJS'],
      expanded: false,
    },
    {
      id: 2,
      name: 'willow',
      image:
        'https://raw.githubusercontent.com/HabonH/Final-Demo/main/docs/dashboard-desktop.png',
      desc: "Willow is a solution to help combat the lack of supports given to students suffering from poor mental health. The pandemic disruptions have proven how detrimental they can be to student wellness. The routine disruptions, adverse learning conditions and anti-social patterns can be difficult to handle when you aren't given tools to remedy them. Willow aims to be that set of tools.",
      github: 'https://github.com/stewanoya/willow',
      techStack: [
        'React',
        'Axios',
        'React Router',
        'Express',
        'Node',
        'PSQL',
        'JWT',
        'Material UI',
      ],
      expanded: false,
    },
    {
      id: 3,
      name: 'Scheduler',
      image:
        'https://raw.githubusercontent.com/stewanoya/scheduler/master/docs/form.png',
      desc: 'Scheduler is a React based project that uses a RESTful API to manage interview scheduling for clients. The interactive UI displays messages accordingly and will notify users if there is some kind of error making a request to the server or a user-generated error. \nThe app also used Storybook to preform isolated component tests, Jest for integration testing and Cypress for end-to-end testing.',
      github: 'https://github.com/stewanoya/scheduler',
      techStack: [
        'React',
        'Axios',
        'Express',
        'StoryBook',
        'Jest',
        'Cypress',
        'SASS',
      ],
      expanded: false,
    },
  ],
})

// getters
export const getters = {}

// actions
// actions are async, will hit API.
// once data is back, mutation updates the state
// flux paradigm
export const actions = {}
// mutations
// synchronous, happens instantly
export const mutations = {
  toggleExpand(state, index) {
    state.projectList[index].expanded = !state.projectList[index].expanded
  },
}
