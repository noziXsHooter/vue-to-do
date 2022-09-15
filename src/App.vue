<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

        <TodoSpinner v-if="loading"/>
      <div v-else>
        <TodoFormAdd/>

        <TodoItems/>

        <TodoEmpty/>
      </div>

    </div>
  </div>
  <!--/ Content -->
</template>

<script>
import TodoItems from '@/components/TodoItems.vue';
import TodoSpinner from '@/components/TodoSpinner.vue';
import TodoFormAdd from '@/components/TodoFormAdd.vue';
import TodoEmpty from '@/components/TodoEmpty.vue';
//import axios from 'axios';

export default {
  name: "App",
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoItems,
    TodoEmpty,
  },
  data(){
    return {
      loading: false
    }
  },

  created() {
    this.loading = true
    this.$store.dispatch('getTodos')
      .finally(()=>{
        this.loading = false
      })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
