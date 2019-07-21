<template>
  <div id="ToDoList">
    <div>
      <h2>Jquery To Do List</h2>
      <p><em>Simple Todo List with adding and filter by diff status.</em></p>
    </div>
    <div><input type="text" v-model="list">
      <button v-on:click="add">Add</button>
    </div>
    <br>
  </div>
</template>

<script>
  import Button from "./Button.vue"
  export default {
    name: "ToDoList",
    components: {
      Button
    }
  }
</script>

<style scoped>

</style>
