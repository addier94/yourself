<template>
  <div class="container">
    <ErrorView :title="'Ooooops, necesitas iniciar sesion para ver esta página'"
               :status="'401'"
               :navigateToPage="'/login'"
               :navigateToText="'Volver al home'" />
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
