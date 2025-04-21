import { ref, reactive, watch } from 'vue'

export const jsonInputStore = ref('{}')
export const upsigUrlStore = ref('')

export const numberBaseStore = ref(0)

export const settings = reactive(
  JSON.parse(localStorage.getItem('settings')) || {
    upsigSecret: ['', ''],
  },
)
watch(settings, (v) => {
  localStorage.setItem('settings', JSON.stringify(v))
})
