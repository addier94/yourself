<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Todos los cursos</h1>
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
  </div>
</template>

<script>
import CourseCard from '~/components/shared/CourseCard'
import CourseCardTooltip from '~/components/CourseCardTooltip'
import { mapState } from 'vuex'
export default {
  head: {
    title: 'Cursos sobre tecnologia y programación | Alfredo Fernandez'
  },
  head: {
    title: 'Cursos en linea | Alfredo Fernandez'
  },
  components: {
    CourseCard, CourseCardTooltip
  },
  computed: {
    ...mapState({
      courses: state => state.course.items
    })
  },
  async fetch({store}) {
    await store.dispatch('course/fetchCourses')
  }
}
</script>

<style scoped lang="scss">
  // Home page
  .links {
    padding-top: 15px;
  }
</style>