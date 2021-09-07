//store
export const state = () => ({
  isChangedColor :true
})

//actions
export const actions = {

}
//mutations
export const mutations = {
  setColor(state,data) {
      state.isChangedColor = data
  }
}
//getters
export const getters = (state) => {
  return state
}
