<template>
<div>
  <input
    :maxLength="maxLength"
    @input="emitInputValue"
    @blur="v.$touch()"
    type="text"
    placeholder="Titulo para el curso"
    class="input is-large">
  <span class="icon is-small is-right">
    {{ remainingLenght }}
  </span>
</div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: ''
    }
  },
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
  },
  computed: {
    inputLength() {
      return this.currentValue.length || 0
    },
    remainingLenght() {
      if (this.inputLength > 0 && this.inputLength < this.maxLength) {
        return this.maxLength - this.inputLength
      } else if (this.inputLength === 0) {
        return this.maxLength
      } else {
        return 0
      }
    }
  },
  methods: {
    emitInputValue($event) {
      this.currentValue = $event.target.value
      this.$emit('input',this.currentValue)
    }
  }
}
</script>