<template>
  <div>
    <h1>Jquery To Do List</h1>
    <i>Simple Todo List with adding and filter by diff status.</i>
    <input type="text" v-model="list"><button v-on:click="add">Add</button>
  </div>
</template>

<script>
  export default {
    name: "ToDoList"
  }
</script>

<style scoped>

</style>
