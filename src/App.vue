<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const routes = ref([
  { label: 'Json Formatter', route: 'json-formatter' },
  { label: 'URL Decoder', route: 'url-decoder' },
  { label: 'Upsig Decoder', route: 'upsig-decoder' },
  { label: 'Settings', route: 'settings' },
])

const router = useRouter()
const route = useRoute()
const activeRoute = ref(route.name || '')
// 启动时router可能未ready，导致拿到的route.name是undefined
router.isReady().then(() => {
  activeRoute.value = route.name
})
watch(activeRoute, async (n, o) => {
  if (n === o) {
    return
  }
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
