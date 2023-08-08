<template>
  <div class="todo">
    <div class="todo-input">
      <input type="text" v-model.trim="inputText">
      <button @click="addItem">添加</button>
      <button @click="removeDone">清理</button>
    </div>
    <div class="todo-list">
      <ul v-for="(item, index) in todoList" :key="index">
        <li>
          <input type="checkbox" v-model="item.done">
          <span :class="{ done: item.done }">{{ item.msg }}</span>
          <button @click="removeItem(index)">❎</button>
        </li>
      </ul>
    </div>
    <div class="todo-num">
      <span>全选</span>
      <input type="checkbox" v-model="hasAllDone">
      <span>{{ hasDone }}/{{ todoList.length }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Todo {
  msg: string,
  done: boolean
}

const inputText = ref<string>('')


const todoList = ref<Todo[]>([
  { msg: '吃饭', done: false },
  { msg: '睡觉', done: false },
  { msg: '打豆豆', done: false }
])

//当前选择的个数
const hasDone = computed<number>(() => {
  return todoList.value.filter(item => item.done).length
})

//是否全选
const hasAllDone = computed<boolean>({
  get() {
    return hasDone.value === todoList.value.length
  },
  set() {
    todoList.value.forEach(item => item.done = !item.done)
  }
})



//添加
let addItem = () => {
  if (inputText.value) {
    todoList.value.push({
      msg: inputText.value,
      done: false
    })
    inputText.value = ''
  }
}

//删除
let removeItem = (index: number) => {
  todoList.value.splice(index, 1)
}

//删除已经完成的
let removeDone = () => {
  todoList.value = todoList.value.filter(item => !item.done)
}

</script>

<style scoped>
.todo {
  width: 280px;
  margin: 0 auto;
  border: 1px solid #ccc;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.todo-input {
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
}

.todo-num {
  display: flex;
  gap: 14px;
}

.todo-list ul li {
  display: flex;
  gap: 24px;
}

.done {
  text-decoration: line-through;
  color: gray;
}
</style>