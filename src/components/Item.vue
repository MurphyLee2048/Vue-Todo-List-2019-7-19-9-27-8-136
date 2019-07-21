<template>
  <div>
    <li :class="{finished: item.isFinished}">
      <input type="checkbox" v-on:click="change" >
      <span>{{ item.message }}</span>
    </li>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: ['item'],
    methods: {
      change:function () {
        this.item.isFinished = !this.item.isFinished;
      }
    }
  }
</script>

<style scoped>

</style>
