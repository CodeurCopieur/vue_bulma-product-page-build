<template>
  <div id="app">
    <GridColumns></GridColumns>
    <ResponsiveClasses></ResponsiveClasses>
  </div>
</template>

<script>
import GridColumns from './components/GridColumns.vue'
import ResponsiveClasses from './components/ResponsiveClasses.vue'

export default {
  name: 'App',
  components: {
    GridColumns,
    ResponsiveClasses
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
