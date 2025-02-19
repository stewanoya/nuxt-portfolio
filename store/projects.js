// state

export const state = () => ({
  projectList: [
    {
      id: 9,
      name: 'Play Call Tracker',
      image: 'https://raw.githubusercontent.com/stewanoya/assets/main/play-tracker.png',
      github: null,
      demoUrl: 'https://playtrack.ca/',
      desc: "A web app built to be used by Football coaches to track game statistics as they make calls on the field. I built this for myself as I've been a community coach for many years, and was looking to solve the problem of having someone write down play calls and results as the game went on.",
      techStack: [
        'Angular',
        'RxJs',
        'MaterialUI',
        '.NET 8',
        'MSSQL'
      ],
      expanded: false,
    },
    {
      id: 8,
      name: 'Multiplication Squares',
      image: 'https://raw.githubusercontent.com/stewanoya/assets/main/m-squares.png',
      github: 'https://github.com/stewanoya/multiplication-squares',
      demoUrl: 'https://m-squares.anoya.ca',
      desc: "A game built to be used by classroom teachers to have elementary based students practice their multiplication tables. I used to play this game on paper with my students and decided to create this application to help other teachers that were dealing with printing the sheet out everytime they wanted to play. Also my game allows for more flexibility and more difficult multiplication questions.",
      techStack: [
        'Angular',
        'RxJs',
        'MaterialUI',
      ],
      expanded: false,
    },
    {
      id: 7,
      name: 'PDF Filler',
      image:
        'https://raw.githubusercontent.com/stewanoya/assets/main/pdffiller2.png',
      github: null,
      demoUrl: 'https://pdffiller.app',
      desc: 'PDF Filler started as a small node project that was built as a request from a friend that needed a business need met. I later built it into a full application so his company could use it on demand. \n\n PDF Filler takes a set of Excel data, a fillable form, and generates hundreds of filled forms with the data from the excel sheet. \n\n The app is in production, and can be used for free with an account. The repo is private, but I am happy to provide access upon request',
      techStack: [
        'Angular',
        'RxJs',
        'Node',
        'Firebase',
        'MaterialUI',
        'Stripe',
        'TypeScript',
      ],
      expanded: false,
    },
    {
      id: 6,
      name: 'Citadels Online',
      image:
        'https://raw.githubusercontent.com/stewanoya/card-game/main/card-game-client-web/src/assets/Screenshot%202023-01-27%20114019.png',
      github: 'https://github.com/stewanoya/card-game/tree/main',
      demoUrl: null,
      desc: "Citadels Online is based on the board game Citadels. My friends and I would get together and play this game quite frequently. However, once the pandemic started, and we weren't able to get together, I made this game as a replacement to the board game. The game is still a work in progress. The repo is private, but I'm happy to grant access upon request. \n\n For best demo experience, open 2 tabs and play a couple turns against yourself.",
      techStack: ['Vue', 'Vite', 'NaiveUI', 'Express', 'Node', 'WebSockets'],
      expanded: false,
    },
    {
      id: 5,
      name: 'sQuiz Game',
      image:
        'https://raw.githubusercontent.com/stewanoya/sQuiz-Game/master/docs/homepage.png',
      desc: 'sQuiz Game is an app that allows users to make quizzes, take quizzes and share results with friends. A user can search for quizzes, as well as make their quizzes public or private. Users can see the results of their recent attempt and share that result with friends.',
      github: 'https://github.com/stewanoya/sQuiz-Game',
      techStack: ['jQuery', 'Express', 'SASS', 'Node', 'PSQL', 'EJS'],
      expanded: false,
    },
    {
      id: 4,
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
    {
      id: 2,
      name: 'Jungle',
      image:
        'https://raw.githubusercontent.com/stewanoya/jungle-rails/master/docs/products.png',
      desc: 'A mini e-commerce application built with Rails 4.2 for purposes of learning Rails by example. The project features stripe integration with a seperate admin dashboard.',
      github: 'https://github.com/stewanoya/jungle-rails',
      techStack: ['Ruby', 'Rails', 'Stripe API', 'PSQL'],
      expanded: false,
    },
    {
      id: 1,
      name: 'TinyApp',
      image:
        'https://raw.githubusercontent.com/stewanoya/tinyapp/master/docs/urls-page.png',
      desc: 'TinyApp is a TinyURL/Bit.ly clone that takes long URLs and condenses them to a more digestable size. The shorter URLs are great for social media, where you have to pack a bunch of links into a smaller space.',
      github: 'https://github.com/stewanoya/tinyapp',
      techStack: ['Node', 'Express', 'EJS', 'Cookie Session', 'bcrypt'],
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
