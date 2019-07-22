<template>
  <div id="app">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
  import ToDoList from "./components/ToDoList.vue"
export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style src="./assets/App.css">

</style>
