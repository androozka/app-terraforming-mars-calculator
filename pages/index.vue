<template>
  <main>
    <UTabs :items="items" class="w-full">
      <template #default="{ item, index, selected }">
        <div class="flex items-center gap-2 relative truncate">
          <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />
          <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
          <span
            v-if="selected"
            class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
        </div>
      </template>

      <template #item="{ item }">
        <UCard
          @submit.prevent="
            //() => onSubmit(item.key === 'account' ? accountForm : passwordForm)
          ">
          <template #header>
            <p
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {{ item.description }}
            </p>
          </template>

          <div v-if="item.label === 'Games'" class="space-y-3">
            <GamesSelector />
          </div>

          <div v-else-if="item.label === 'Players'" class="space-y-3">
            <PlayerSelector />
          </div>

          <div v-else-if="item.label === 'Points'" class="space-y-3">
            <PointsEntry />
          </div>

          <div v-else-if="item.label === 'Scores'" class="space-y-3">
            Scores Component
          </div>

          <div v-else="item.label === 'Instructions'" class="space-y-3">
            <InstructionsDisplay />
          </div>

          <template #footer>
            <UButton type="submit" color="red">
              <UIcon name="i-heroicons-no-symbol-solid" />
              Clear
            </UButton>
            <UButton type="submit" color="primary">
              <UIcon name="i-heroicons-arrow-right-circle-solid" />
              Next
            </UButton>
          </template>
        </UCard>
      </template>
    </UTabs>
  </main>
</template>

<script setup lang="ts">
import { steps as items } from '~/data/options.json'
import InstructionsDisplay from '~/components/InstructionsDisplay.vue'
import GamesSelector from '~/components/GameSelector.vue'
import PlayerSelector from '~/components/PlayerSelector.vue'
import PointsEntry from '~/components/PointsEntry.vue'

// import { useOptionsStore } from '@/stores/optionsStore'

// const items = [
//   {
//     label: 'Games',
//     icon: 'i-heroicons-cursor-arrow-rays-solid',
//     content: 'Game Select Component'
//   },
//   {
//     label: 'Players',
//     icon: 'i-heroicons-user-group-solid',
//     content: 'And, this is the content for Tab2'
//   },
//   {
//     label: 'Points',
//     icon: 'i-heroicons-table-cells-solid',
//     content: 'Points Entry Component'
//   },
//   {
//     label: 'Scores',
//     icon: 'i-heroicons-trophy',
//     content: 'Scores Display Component'
//   }
// ]
</script>

<style lang="scss" scoped></style>
