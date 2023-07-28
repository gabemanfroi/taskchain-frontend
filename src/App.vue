<template>
  <div>
    <TodoList />
    <AddTodo />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";

export default defineComponent({
  name: "App",
  components: {
    TodoList,
    AddTodo,
  },
});
</script>
