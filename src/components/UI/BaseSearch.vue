<template>
  <form>
    <input
      type="search"
      @input="search"
      :value="searchTerm"
      placeholder="Filter items"
    />
  </form>
</template>

<script>
export default {
  props: ['searchTerm'],
  emits: ['search'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: 0.15rem;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus {
  border-color: #00006b;
  outline: none;
  background-color: #eeeeff;
}
</style>
