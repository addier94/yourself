<template>
  <div class="container">
    <ErrorView :title="'Ooooops, No estas autorizado para ver esta página, hable con el administrador para obtener derechos de acceso'"
               :status="'401'"
               :navigateToPage="'/'"
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
