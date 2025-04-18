<script setup>
import { settings } from '@/stores'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
</script>

<template>
  <el-form :model="settings" label-width="auto">
    <el-form-item label="Upsig Secret">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input v-model="settings.upsigSecret[0]" />
        </el-col>
        <el-col :span="12">
          <el-input v-model="settings.upsigSecret[1]" />
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>

  <vue-json-pretty :data="settings" />
</template>

<style scoped>
.el-row {
  width: 100%;
}
</style>
