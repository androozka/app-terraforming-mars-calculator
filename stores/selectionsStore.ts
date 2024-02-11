import { defineStore } from 'pinia'
import selectionsData from '~/data/selections.json'

export const useSelectionsStore = defineStore('selectionsStore', () => {
  const selections = ref(selectionsData)

  return {
    selections
  }
})

/*
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) // <-- State properties
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2) // <-- Getters
  function increment() { // <-- Actions
    count.value++
  }

  return { count, name, doubleCount, increment }
})
*/
