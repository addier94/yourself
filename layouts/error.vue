<template>
  <div class="container">
    <ErrorView :title="'Ooops la página que intenta acceder no existe'"
               status="404"
               :navigateToPage="'/'"
               :navigateToText="'Ir a home'" />
  </div>
</template>

<script>
import ErrorView from '@/components/shared/ErrorView'
export default {
  components: {
    ErrorView
  }
}
</script>

<style scoped>
</style>
