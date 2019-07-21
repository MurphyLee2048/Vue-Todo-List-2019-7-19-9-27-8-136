<template>
  <div id="ToDoList">
    <Header></Header>
    <div>
      <input type="text" v-on:keyup.enter="submit" v-model="newItem">
<!--      <button v-on:click="add">Add</button>-->
    </div>
    <br>
    <ol>
      <li v-for="item in list">
        <span>{{ item.message }}</span>
      </li>
    </ol>
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
        ],
        newItem: ""
      }
    },
    methods: {
      submit() {
        alert(this.newItem);
        this.list.push({message: this.newItem});
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
