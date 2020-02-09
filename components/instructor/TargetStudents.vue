<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Apunte a sus estudiantes</p>
    </header>
    <div class="card-content card-section">
      <form>
        <multi-line-text-input 
          @addClicked="addLine('wsl')"
          @removeClicked="removeLine($event, 'wsl')"
          @valueUpdated="updateLine($event, 'wsl')"
          :lines="course.wsl"
          label="Que aprenderan los estudiantes" 
        />
        <multi-line-text-input 
          @addClicked="addLine('requirements')"
          @removeClicked="removeLine($event, 'requirements')"
          @valueUpdated="updateLine($event, 'requirements')"
          :lines="course.requirements"
          label="Cuales son los requisitos" 
        />
      </form>
    </div>
  </div>
</template>
<script>
import MultiLineTextInput from '~/components/form/MultiLineTextInput'
export default {
  components: {
    MultiLineTextInput
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  methods: {
    addLine(field) {
      this.$store.commit('instructor/course/addLine', field)
    },
    removeLine(index, field) {
      this.$store.commit('instructor/course/removeLine', {field, index})
    },
    updateLine({value, index}, field) {
      this.$store.dispatch('instructor/course/updateLine', {field, value, index})
    }
  }
}
</script>