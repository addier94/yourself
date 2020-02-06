<template>
  <div class="course-create-wrapper">
    <div class="course-create-headerText">
      Nombre para tu curso.
    </div>
    <h2 class="course-create-subtitle">
      No te preocupes, puedes cambiar el título cuando quieras.
    </h2>
    <form class="course-create-form">
      <div class="course-create-form-group">
        <div class="field course-create-form-field control has-icons-right">
          <input
            @input="emitFormData"
            @blur="$v.form.title.$touch()"
            v-model="form.title"
            :maxLength="50"
            type="text"
            placeholder="Titulo para el curso"
            class="input is-large">
            <div v-if="$v.form.title.$error" class="form-error">
              <span v-if="!$v.form.title.required" class="help is-danger">Titulo para el curso es necesario</span>
            </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      form: {
        title: ''
      }
    }
  },
  validations: {
    form: {
      title: {
        required
      }
    }
  },
  computed: {
    isValid() {
      return !this.$v.$invalid
    }
  },
  methods: {
    emitFormData() {
      this.$emit('stepUpdated', {data: this.form, isValid: this.isValid})
    }
  }
}
</script>