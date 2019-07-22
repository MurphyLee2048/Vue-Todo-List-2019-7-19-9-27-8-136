<template>
  <div>
    <button v-on:click="clickAll">ALL</button>
    <button v-on:click="clickActive">Active</button>
    <button v-on:click="clickComplete">Complete</button>
  </div>
</template>

<script>
  export default {
    name: "toDoListButton",
    methods: {
      clickAll() {
        this.$emit("clickAll")
      },
      clickActive(){
        this.$emit("clickActive")
      },
      clickComplete(){
        this.$emit("clickComplete")
      }


    }
  }
</script>

<style scoped>

</style>
