<template>
  <div id="todo-app">
    <h1>{{ header }}</h1>

    <div v-if="editing" class="add-task-form">
      <input v-model="newTask" @keyup.enter="saveTask" placeholder="Add a task" />
      <label>
        <input type="checkbox" v-model="newTaskImportant" />
        Important
      </label>
      <button @click="saveTask">Save</button>
    </div>

    <button v-if="editing" @click="doEdit(false)">Cancel</button>
    <button v-else @click="doEdit(true)">Add Task</button>

    <ul>
      <li
        v-for="task in reversedTasks"
        :key="task.id"
        :class="{ done: task.completed, important: task.important }"
        @click="toggleCompleted(task)"
      >
        {{ task.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const header = ref("To-Do List")
const editing = ref(false)
const newTask = ref("")
const newTaskImportant = ref(false)

const tasks = ref([])

const saveTask = () => {
  if (!newTask.value.trim()) return
  tasks.value.push({
    id: tasks.value.length + 1,
    label: newTask.value,
    important: newTaskImportant.value,
    completed: false,
  })
  newTask.value = ""
  newTaskImportant.value = false
}

const doEdit = (value) => {
  editing.value = value
  newTask.value = ""
  newTaskImportant.value = false
}

const toggleCompleted = (task) => {
  task.completed = !task.completed
}

const reversedTasks = computed(() => [...tasks.value].reverse())
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
.important {
  font-weight: bold;
  color: red;
}
</style>