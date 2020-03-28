


export const state = () => ({
  item: {},
  items: {
    all: [],
    featured: []
  }
})

export const actions = {
  fetchBlogs({commit, state}) {
    return this.$axios.$get('/api/v1/blogs')
    .then(data => {
        const {blogs} = data
        commit('setBlogs', {resource: 'all', blogs})
        return state.items
      })
      .catch(error => Promise.reject(error))
  },
  fetchBlogBySlug({commit, state}, slug) {
    return this.$axios.$get(`/api/v1/blogs/s/${slug}`)
      .then(blog => {
        commit('setBlog', blog)
        return state.item
      })
      .catch(error => Promise.reject(error))
  }
}

export const mutations = {
  setBlogs(state, {resource, blogs}) {
    state.items[resource] = blogs
  },
  setBlog(state, blog) {
    state.item = blog
  }
}