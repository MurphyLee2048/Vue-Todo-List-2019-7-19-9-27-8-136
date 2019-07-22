<template>
  <div id="ToDoList">
    <Header></Header>
    <div>
      <input class="input-text" type="text" v-on:keyup.enter="submit" v-model.trim="newItem">
      <button v-on:click="submit">Add</button>
    </div>
    <br>
    <ol>
      <Item @updateIsFinished="updateIsFinished" :item="item" v-for="(item) in filtersomething(list)"></Item>
    </ol>
    <ToDoListButton @clickAll="clickAll"  @clickActive="clickActive" @clickComplete="clickComplete"></ToDoListButton>
  </div>

</template>

<script>
  import Header from "./Header";
  import Item from "./Item.vue";
  import ToDoListButton from "./ToDoListButton.vue";


  export default {
    name: "ToDoList",
    data() {
      return {
        count:0,
        list: [],
        newItem: "",
        isActive: false,
        isComplete: false
      }
    },
    methods: {
      submit() {
        if (this.newItem !== '') {
          this.list.push({message: this.newItem, isFinished: false, myIndex:this.count++});
        }
      },
      filtersomething:function (list) {
        if (!this.isActive && !this.isComplete) {
          return list;
        }
        if (this.isActive) {
          return list.filter(v => !v.isFinished);
        }

        if (this.isComplete) {
          return list.filter(v => v.isFinished);
        }

      },
      updateIsFinished:function (myIndex) {
        this.list[myIndex].isFinished = !this.list[myIndex].isFinished;
      },
      clickAll(){
        this.isActive = false;
        this.isComplete = false;
      },
      clickActive(){
        this.isActive = true;
        this.isComplete = false;
      },
      clickComplete(){
        this.isActive = false;
        this.isComplete = true;
      }
    },
    components: {
      Header,
      Item,
      ToDoListButton
    }
  }
</script>

<style scoped>

</style>
