<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Apunte a sus estudiantes</p>
    </header>
    <div class="card-content card-section">
      <form>
        <multi-line-text-input label="Que aprenderan los estudiantes" />
        <multi-line-text-input label="Cuales son los requisitos" />
      </form>
    </div>
  </div>
</template>
<script>
import MultiLineTextInput from '~/components/form/MultiLineTextInput'
export default {
  components: {
    MultiLineTextInput
  }
}
</script>