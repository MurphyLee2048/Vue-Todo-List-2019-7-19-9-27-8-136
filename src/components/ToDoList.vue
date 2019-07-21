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
  export default {
    name: "ToDoList"
  }
</script>

<style scoped>

</style>
