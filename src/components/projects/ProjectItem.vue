<template>
  <li>
    <h3>{{ title }}</h3>
  </li>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  padding: 0.5rem;
  color: white;
  background-color: #00006b;
}

li h3 {
  margin: 0;
}
</style>
