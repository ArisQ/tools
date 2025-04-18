<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const routes = ref([
  { label: 'Json Formatter', route: 'json-formatter' },
  { label: 'Url Decoder', route: 'url-decoder' },
])

const activeRoute = ref('json-formatter')

const router = useRouter()
watch(activeRoute, async (n, o) => {
  if (n === o) {
    return
  }
  console.log(n)
  router.push({ name: n })
})
</script>

<template>
  <header>
    <el-tabs v-model="activeRoute">
      <el-tab-pane :label="r.label" :name="r.route" v-for="r in routes" />
    </el-tabs>
  </header>

  <main>
    <RouterView />
  </main>
</template>
