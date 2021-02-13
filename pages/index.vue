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
        <div class="cocktails-center">
          <!-- iterate columns with v-for and don't forget :key -->
          <div 
            v-for="course in courses" 
            :key="course._id" 
            class="">
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
    <div class="container m-b-md">
      <h1 class="title">Articulos destacados</h1>
    </div>

    <div class="container d-grid">
      <div 
            v-for="blog in featuredBlogs"
            :key="blog._id"
            class="grid-item">
        <div @click="$router.push(`/blogs/${blog.slug}`)" class="post-header">
          <figure class="avatar-in-blog d-flex align-items-center">
              <img class="m-r-sm" :src="blog.author.avatar ? blog.author.avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNYjU6pmBARJ191GCVK0UncdRoj_zVSJ4ZjLkRuSoDICKTfWxA&usqp=CAU'">
            <div class="post-content">
              Por {{ blog.author.name }}, {{ blog.createdAt | formatDate }}
            </div>
          </figure>
          <h4 class="title is-4">{{ blog.title }}</h4>
          <h5 class="subtitle is-5">{{ blog.subtitle }}</h5>
        </div>
      </div>
    </div>


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
      courseHero: state => state.hero.item || {}
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
.cocktails-center {
  width: $smallWidth;
  margin: 0 auto;
  max-width: $fullWidth;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370.8px, 1fr));
  column-gap: 1.8rem;
  row-gap: 1.8rem;
  /* align-items: start; */
}



/* post */
.post-header .avatar-in-blog img{
  border-radius: 50%;
  width: 3rem;
}
.d-grid{
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 2rem;

  .grid-item{
    .post-header{
      border-color: $primaryColor;
      padding-left: 1rem;
      border-left: 4px solid $primaryColor;
      transition: all .3s ease;
      &:hover{
        cursor: pointer;
        background: $primaryLightColor;
        border-left: 5px solid $primaryColor;
      }
    }
    .post-content{
      font-size: 1.1rem;
      font-weight: 300;
      font-style: italic;
    }
  }
}

@media (max-width: 992px)
{
  .d-grid{
    grid-template-columns: 1fr;
  }
}

</style>