<template>
  <div class="todo">
    <input type="text" placeholder="请输入待办事项" v-model.trim="todoInput" class="todo-input" /> &nbsp;
    <button @click="addList">添加</button> &nbsp;
    <button @click="removeCheck">清理</button>
    <div v-if="todoList.length">
      <ul v-for="(item, index) in todoList" :key="index">
        <li class="todo-item">
          <input type="checkbox" v-model="item.done" />
          <span :class="{ done: item.done }">{{ item.msg }}</span>
          <button @click="removeList(index)">❎</button>
        </li>
      </ul>
    </div>

    <div class="choice-select">
      <span>全选：</span>
      <input type="checkbox" v-model="isAllDone">
      <span>{{ hasDone }} / {{ todoList.length }}</span>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'


interface TodoItem {
  msg: string,
  done: boolean
}

const todoInput = ref<string>('')

const todoList = ref<TodoItem[]>([
  { msg: '吃饭', done: false },
  { msg: '睡觉', done: false },
  { msg: '打豆豆', done: false },
])

const hasDone = computed(() => todoList.value.filter(item => item.done).length)



const isAllDone = computed<boolean>({
  get() {
    return hasDone.value === todoList.value.length
  },
  set(val) {
    todoList.value.forEach(item => item.done = val)
  }
})


//添加元素
let addList = () => {
  if (todoInput.value) {
    todoList.value.push({ msg: todoInput.value, done: false })
    todoInput.value = ''
  }
}

//删除元素
let removeList = (index: number) => {
  todoList.value.splice(index, 1)
}

//删除所有已经完成的
let removeCheck = () => {
  todoList.value = todoList.value.filter(item => !item.done)
}


</script>

<style scoped>
.todo {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todo-input {
  margin: 20px 0;
}

.todo-item {
  display: flex;
  gap: 20px;
}

.choice-select {
  display: flex;
  margin-top: 24px;
  gap: 20px;
}

.done {
  text-decoration: line-through;
  color: gray;
}
</style>