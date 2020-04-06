<template>
  <div>
    <hero
      :title="courseHero.title"
      :subtitle="courseHero.subtitle"
      :image="courseHero.image"
      :promoLink="courseHero.product && courseHero.product.productLink"
    />
    <section class="section">
      <div class="container">
        <h1 class="title">Cursos destacados</h1>
        <div class="columns is-multiline">
          <!-- iterate columns with v-for and don't forget :key -->
          <div 
            v-for="course in courses" 
            :key="course._id" 
            class="column is-one-quarter">
            <!-- Pass a course as a prop to course-card -->
            <v-popover
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card :course="course"/>
              <template slot="popover">
                <course-card-tooltip 
                  :title="course.title"
                  :subtitle="course.category.name"
                  :description="course.subtitle"
                  :wsl="course.wsl"
                />
              </template>
            </v-popover>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Articulos destacados</h1>
        <div class="columns is-multiline">
          <div v-for="blog in featuredBlogs" :key="blog._id" class="column is-one-quarter">
            <blog-card
              :blog="blog"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CourseCard from '~/components/shared/CourseCard'
import CourseCardTooltip from '~/components/CourseCardTooltip'
import BlogCard from '~/components/shared/BlogCard'
import Hero from '~/components/shared/Hero'
import { mapState } from 'vuex'
import Subtitle from '~/components/editor/components/Subtitle';

export default {
  head: {
    title: 'Cursos en linea y blogs | Alfredo Fernandez'
  },
  components: {
    CourseCard, BlogCard, Hero, CourseCardTooltip
  },
  computed: {
    ...mapState({
      courses: state => state.course.items,
      featuredBlogs: state => state.blog.items.featured,
      courseHero: state => state.hero.item
    })
  },
  async fetch({store}) {
    await store.dispatch('course/fetchCourses')
    await store.dispatch('blog/fetchFeaturedBlogs', {'filter[featured]': true})
  }
}
</script>

<style scoped lang="scss">
  // Home page
  .links {
    padding-top: 15px;
  }
</style>