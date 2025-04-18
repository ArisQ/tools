<script setup>
import { computed } from 'vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

import { jsonInputStore } from '@/stores'

// TODO: 失败时标记解析成功和失败的部分
const jsonObj = computed(() => {
  try {
    return JSON.parse(jsonInputStore.value)
  } catch (e) {
    return e
  }
})

// pinia太重了
// import { defineStore } from 'pinia'
// 使用store使得在route切换的时候输入能够保持
// const useJsonInputStore = defineStore('jsonInput', () => {
//   const text = ref('{}')
//   return { text }
// })
// const jsonInputStore = useJsonInputStore()
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-input
        v-model="jsonInputStore"
        type="textarea"
        :autosize="{ minRows: 20 }"
        placeholder="Please input"
      />
    </el-col>
    <el-col :span="12">
      <vue-json-pretty :data="jsonObj" />
    </el-col>
  </el-row>
</template>
