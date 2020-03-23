<template>
  <!-- Finish handling of URL -->
  <div>
    <Header
      title="Escribe tu blog"
      exitLink="/instructor/blogs">
      <!-- TODO: Check if blog status is active -->
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <Modal
            @opened="checkBlogValidity"
            openTitle="Publicar"
            openBtnClass="button is-success is-medium is-inverted is-outlined"
            title="Review Details">
            <div>
              <div class="title">Una vez que publica el blog, no puede cambiar la URL a un blog.</div>
              <!-- Check for error -->
              <div v-if="!publishError">
                <div class="subtitle">así es como se verá la URL de la publicación del blog después de la publicación</div>
                <article class="message is-success">
                  <div class="message-body">
                    <!-- Get here actual slug -->
                    <strong>{{ getCurrentUrl() }}/blogs/{{ slug }}</strong>
                  </div>
                </article>
              </div>
              <article v-else class="message is-danger">
                <div class="message-body">
                  {{ publishError }}
                </div>
              </article>
            </div>
          </Modal>
        </div>
      </template>
      <!-- <template v-else #actionMenu>
        <div class="full-page-takeover-header-button">
          <Modal
            openTitle="Unpublish"
            openBtnClass="button is-success is-medium is-inverted is-outlined"
            title="Unpublish Blog">
            <div>
              <div class="title">Unpublish blog so it's no longer displayed in blogs page</div>
            </div>
          </Modal>
        </div>
      </template> -->
    </Header>
    <div class="blog-editor-container">
      <div class="container">
        <editor 
          @editorMounted="initBlogContent"
          @editorUpdated="updateBlog"
          :isSaving="isSaving"
          ref="editor"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Editor from '~/components/editor'
import Header from '~/components/shared/Header'
import Modal from '~/components/shared/Modal'
import { mapState } from 'vuex'
import slugify from 'slugify'

// My Amazing blog post
// my-amazing-blog-post

// slug is something like unique ID BUT IN READABLE FORM

export default {
  layout: 'instructor',
  components: {
    Editor, Header, Modal
  },
  data() {
    return {
      publishError: '',
      slug: ''
    }
  },
  computed: {
    ...mapState({
      blog: ({instructor}) => instructor.blog.item,
      isSaving: ({instructor}) => instructor.blog.isSaving
    })
  },
  async fetch({params, store}) {
    await store.dispatch('instructor/blog/fetchBlogById', params.id)
  },
  methods: {
    // TODO: fix color scheme of code block in editor!
    initBlogContent(initContent) {
      if (this.blog && this.blog.content) {
        initContent(this.blog.content)
      }
    },
    updateBlog(blogData) {
      if (!this.isSaving) {
        this.$store.dispatch('instructor/blog/updateBlog', {data: blogData, id: this.blog._id})
          .then(_ => this.$toasted.success('Blog Actualizado!', {duration: 2000}))
          .catch(error => this.$toasted.error('Blog no se puede guardar!', {duration: 2000}))
      }
    },
    checkBlogValidity() {
      const title = this.$refs.editor.getNodeValueByName('title')
      this.publishError = ''

      if (title && title.length > 24) {
        this.slug = this.slugify(title)
      
      } else {
        this.publishError = 'No se puede publicar! El título debe tener más de 24 caracteres!'
      }
    },
    getCurrentUrl() {
      // process.client will return true if we are in browser environment
      return process.client && window.location.origin
    },
    slugify(text) {
      return slugify(text, {
        replacement: '-',
        remove: null,
        lower: true
      })
    }
  }
}
</script>
