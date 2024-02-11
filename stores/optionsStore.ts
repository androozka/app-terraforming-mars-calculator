import { defineStore } from 'pinia'
import optionsData from '~/data/options.json'

export const useOptionsStore = defineStore('optionsStore', () => {
  // Games options
  const games = ref(optionsData.games)

  // Categories options
  const categories = ref(optionsData.categories)

  return {
    games,
    categories
  }
})
