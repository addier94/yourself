<template>
  <div class="course-create-wrapper">
    <div class="course-create-headerText">
      ¿Qué categoría se ajusta mejor al conocimiento que compartirás?
    </div>
    <h2 class="course-create-subtitle">Si no está seguro acerca de la categoría correcta, puede cambiarla más adelante.</h2>
    <form class="course-create-form">
      <div class="course-create-form-group">
        <div class="course-create-form-field">
          <div class="select is-large">
            <select @change="emitFormData">
              <option value="default">Selecciona Categoria</option>
              <option 
                v-for="category in categories"
                :key="category._id">
                {{ category.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators' 
export default {
  data () {
    return {
      form: {
        category: ''
      }
    }
  },
  validations: {
    form: {
      category: required
    }
  },
  computed: {
    isValid() {
      return !this.$v.$invalid
    },
    categories() {
      return this.$store.state.category.items
    }
  },
  methods: {
    emitFormData() {
      this.$emit('stepUpdated', {data: this.form, isValid: this.isValid})
    }
  }
}
</script>