<template>
  <div id="ToDoList">
    <Header></Header>
    <div>
      <input type="text" v-on:keyup.enter="submit" v-model.trim="newItem">
      <!--      <button v-on:click="add">Add</button>-->
    </div>
    <br>
    <ol>
      <Item :item="item" v-for="(item) in list"></Item>
    </ol>
  </div>
</template>

<script>
  import Header from "./Header";
  import Item from "./Item.vue";
  import Button from "./Button.vue";


  export default {
    name: "ToDoList",
    data() {
      return {
        list: [],
        newItem: ""
      }
    },
    methods: {
      submit() {
        this.list.push({message: this.newItem, isFinished: false});
      }
    },
    components: {
      Header,
      Item,
      Button
    }
  }
</script>

<style scoped>

</style>
