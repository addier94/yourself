<template>
  <input
    :maxLength="maxLength"
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
    }
  }
}
</script>