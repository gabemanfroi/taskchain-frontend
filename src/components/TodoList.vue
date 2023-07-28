<!-- frontend/src/components/TodoList.vue -->

<template>
  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { getTodoContent, getTotalTodoCount } from "@/services/contractService";
import { web3 } from "@/services/web3Config";

export default defineComponent({
  name: "TodoList",
  setup() {
    const todos = ref([]);
    onMounted(async () => {
      const totalTodoCount = await getTotalTodoCount();

      const todoPromises = Array.from(
        { length: Number(totalTodoCount) },
        (_, index) => getTodoContent(index)
      );
      const tasks = await Promise.all(todoPromises);

      // Convert the hexadecimal representations to actual content strings
      todos.value = tasks.map(({ content }) => web3.utils.hexToAscii(content));
    });
    return {
      todos,
    };
  },
});
</script>
