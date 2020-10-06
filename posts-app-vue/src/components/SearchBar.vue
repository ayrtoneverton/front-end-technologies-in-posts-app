<template>
  <div>
    <b-form-input
      type="search"
      placeholder="Search"
      @input="$emit('change', $event)"
      size="lg"
    />
    <b-icon icon="search"/>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar'
  };
</script>

<style scoped>
  input {
    max-width: 20rem;
    margin-bottom: 2rem;
    padding-right: 2.2rem;
    display: inline-block;
  }
  svg {
    font-size: 1.3rem;
    margin-left: -2rem;
  }
</style>
