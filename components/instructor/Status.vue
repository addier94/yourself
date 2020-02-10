<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Estados</p>
    </header>
    <div class="card-content card-section">
      <div class="field">
        <label class="label">Estado</label>
        <div class="select is-medium">
          <select 
            :value="course.status"
            @change="($event) => emitCourseValue($event, 'status')">
            <option value="default">Cambiar estado</option>
            <option value="active">
              Activo
            </option>
            <option value="published">
              Publicado
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitCourseValue(e, field) {
      this.$emit('courseValueUpdated', {value: e.target.value, field})
    }
  }
}
</script>