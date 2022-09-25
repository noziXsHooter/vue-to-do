<template>
  <!-- Content -->
  <div class="px-4">

    <div class="border-1 border-black rounded-lg bg-gray-900 drop-shadow-lg">
    <div class="bg-gray-300">

    </div>
    <div class=" px-3 py-3 md:px-8 border-1 rounded-t-lg bg-gray-600">
      <span class="text-gray-200 text-4xl"> TO DO LIST</span>
    </div>
      <div class="px-3 py-8 md:px-8">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

          <TodoSpinner v-if="loading"/>
            <div v-else>
          <TodoFormAdd/>
            <TodoItems
                v-if="$store.state.todos.length"
            />
            <TodoEmpty v-else/>
          </div>
        </div>
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
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: "App",
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoItems,
    TodoEmpty,
  },

  setup() {
      const loading = ref(false);
      const store = useStore()

      loading.value = true
      store.dispatch('getTodos').finally(()=>{
          loading.value = false
        })

      return {
        loading,
      }
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
