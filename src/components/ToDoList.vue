<template>
  <div id="ToDoList">
    <Header></Header>
    <div>
      <input type="text" v-on:keyup.enter="submit" v-model="newItem">
      <button v-on:click="add">Add</button>
    </div>
    <br>
  </div>
</template>

<script>
  import Header from "./Header";
  import Button from "./Button.vue";


  export default {
    name: "ToDoList",
    data() {
      return {
        list: [
          {title: "nnnn"}
        ],
        newItem: ""
      }
    },
    methods: {
      submit() {
        alert(this.newItem);
        this.list.push(this.newItem);
      }
    },
    components: {
      Header,
      Button
    }
  }
</script>

<style scoped>

</style>
