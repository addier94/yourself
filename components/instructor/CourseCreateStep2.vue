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
            <select
              v-model="form.category"
              @blur="$v.form.category.$touch()"
              @change="emitFormData">
              <option value="default">Selecciona Categoria</option>
              <option 
                v-for="category in categories"
                :key="category._id"
                :value="category._id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <!-- TODO: -->
          <!-- Consider to create custom validator to check if category is provided and has value of "default" -->
          <div v-if="$v.form.category.$dirty && !isValid" class="form-error">
            <span class="help is-danger">Categoria es necesario</span>
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
        category: 'default'
      }
    }
  },
  validations: {
    form: {
      category: {
        required
      }
    }
  },
  computed: {
    isValid() {
      return !this.$v.$invalid && this.form.category !== 'default'
    },
    categories() {
      return this.$store.state.category.items
    }
  },
  methods: {
    emitFormData() {
      this.$v.form.$touch()
      this.$emit('stepUpdated', {data: this.form, isValid: this.isValid})
    }
  }
}
</script>

<style scoped>
  .help.is-danger {
    text-align: left;
  }
</style>