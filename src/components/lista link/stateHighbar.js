import { ref, computed } from 'vue' 

export const shorter = ref(false)
export const toggleHighbar = () => {(shorter.value = !shorter.value)}

export const HIGHBAR_HEIGHT = 30
 export const HIGHBAR_HEIGHT_COLLAPSED = 10
 export const highbarHeight = computed(
   () => `${shorter.value ? HIGHBAR_HEIGHT_COLLAPSED : HIGHBAR_HEIGHT}%`
 )
