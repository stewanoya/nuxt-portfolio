export const state = () => ({
  navList: [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
  ],
  selected: 0,
})

export const mutations = {
  setSelected(state, index) {
    state.selected = index
  },
}
