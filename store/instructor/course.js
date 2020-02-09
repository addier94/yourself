


export const state = () => ({
  items: [],
  item: {}
})

export const actions = {
  fetchInstructorCourses({commit}) {
    return this.$axios.$get('/api/v1/products/user-products')
    .then((courses) => {
      commit('setCourses', courses)
      return state.items
    })
      .catch(error => Promise.reject(error))
  },
  fetchCourseById({commit}, courseId) {
    return this.$axios.$get(`/api/v1/products/${courseId}`)
      .then(course => {
        commit('setCourse', course)
        return state.item
      })
  },
  createCourse(_, courseData) {
    return this.$axios.$post('/api/v1/products', courseData)
  },
  updateLine({commit}, {index, value, field}) {
    commit('setLineValue', {index, value, field})
    // Surprise commit for next lecture (:
  }
}

export const mutations = {
  setCourses(state, courses) {
    state.items = courses
  },
  setCourse(state, course) {
    state.item = course
  },
  addLine(state, field) {
    state.item[field].push({value: ''})
  },
  removeLine(state, {field, index}) {
    state.item[field].splice(index, 1)
  },
  setLineValue(state, {index, value, field}) {
    state.item[field][index].value = value
  }
}