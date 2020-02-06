<template>
  <input
    :maxLength="maxLength"
    @input="$event => $emit('input', $event.target.value)"
    @blur="v.$touch()"
    type="text"
    placeholder="Titulo para el curso"
    class="input is-large">
</template>

<script>
export default {
  props: {
    maxLength: {
      type: Number,
      default: 50,
      required: false
    },
    v: {
      type: Object,
      required: true
    }
  }
}
</script>