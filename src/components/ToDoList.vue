<template>
  <div id="ToDoList">
    <Header></Header>
    <div>
      <input class="input-text" type="text" v-on:keyup.enter="addItem" v-model.trim="newItem">
      <button v-on:click="addItem">Add</button>
    </div>
    <br>
    <ol>
      <Item @updateIsFinished="updateIsFinished" :item="item" v-for="item in filterSomething"></Item>
    </ol>
    <ToDoListButton @clickAll="clickAll" @clickActive="clickActive" @clickComplete="clickComplete"></ToDoListButton>
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
        newItem: "",
      }
    },
    computed: {
      list() {
        return this.$store.state.list;
      },
      filterSomething() {
        if (!this.$store.state.isActive && !this.$store.state.isComplete) {
          return this.$store.getters.filterAll;
        }
        if (this.$store.state.isActive) {
          return this.$store.getters.filterIsActive;
        }
        if (this.$store.state.isComplete) {
          return this.$store.getters.filterIsComplete;
        }
      }
    },
    methods: {
      updateIsFinished: function (myIndex) {
        this.list[myIndex].isFinished = !this.list[myIndex].isFinished;
      },
      clickAll() {
        this.$store.commit('all');
      },
      clickActive() {
        this.$store.commit('activate');
      },
      clickComplete() {
        this.$store.commit('complete');
      },
      addItem() {
        if (this.newItem !== '') {
          this.$store.commit('addItem', this.newItem);
        }
      },
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
