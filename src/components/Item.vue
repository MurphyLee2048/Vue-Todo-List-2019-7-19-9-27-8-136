<template>
    <li :class="{finished: item.isFinished}">
      <input :checked="item.isFinished" type="checkbox" v-on:click="change" >
      <span>{{ item.message }}</span>
    </li>
</template>

<script>
  export default {
    name: "Item",
    // data(){
    //   return{
    //     isFinished : false
    //   }
    // },
    props: ['item'],
    methods: {
      change:function () {
        this.isFinished = !this.isFinished;
        this.$emit("updateIsFinished", this.item.myIndex);
      }
    }
  }
</script>

<style scoped>

</style>
