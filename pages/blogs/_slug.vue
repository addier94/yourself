
<template>
<div class="blog-editor-container">
  <div class="container">
    <div class="blog-content-user">
      <user-tile
        :name="blog.author.name"
        :avatar="blog.author.avatar"
        :date="blog.createdAt | formatDate"
      />
    </div>
    <editor-view :initialContent="blog.content" />
  </div>
</div>
</template>
<script>
import UserTile from '~/components/shared/UserTile'
import EditorView from '~/components/editor/EditorView'

export default {
  components: {
    UserTile,
    EditorView
  },
  computed: {
    blog() {
      return this.$store.state.blog.item
    }
  },
  
  async fetch({store, params}) {
    await store.dispatch('blog/fetchBlogBySlug', params.slug)
  }
}
</script>

<style scoped lang="scss">
  .blog-content, .blog-content-user {
    max-width: 800px;
    margin: 10px auto;
  }
</style>