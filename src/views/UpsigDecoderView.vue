<script setup>
import { computed } from 'vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

import { settings, upsigUrlStore } from '@/stores'

const secretMap = computed(() => {
  const secret = settings.upsigSecret
  const f = secret[0]
  const t = secret[1]
  const m = {}
  for (let i = 0; i < f.length; i++) {
    m[f[i]] = t[i]
  }
  return m
})

const jsonObj = computed(() => {
  let e = upsigUrlStore.value
  const url = URL.parse(e)
  if (url) {
    e = url.searchParams.get('e')
    if (!e) {
      return 'e not found in url'
    }
  }
  const m = secretMap.value
  const s = Array.from(e).reduce((acc, c) => acc + (m[c] || c), '')
  return JSON.parse(atob(s) || '{}')
})
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-input
        v-model="upsigUrlStore"
        type="textarea"
        :autosize="{ minRows: 20 }"
        placeholder="Please input url"
      />
    </el-col>
    <el-col :span="12">
      <vue-json-pretty :data="jsonObj" />
    </el-col>
  </el-row>
</template>
