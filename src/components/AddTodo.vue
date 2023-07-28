<!-- frontend/src/components/AddTodo.vue -->

<template>
  <div>
    <h2>Add Todo</h2>
    <input v-model="newTodo" type="text" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { addTodoItem } from "@/services/contractService";

export default defineComponent({
  name: "AddTodo",
  setup() {
    const newTodo = ref("");

    const addTodo = async () => {
      if (!newTodo.value) return;
      await addTodoItem(newTodo.value);
      newTodo.value = "";
    };

    return { newTodo, addTodo };
  },
});
</script>
