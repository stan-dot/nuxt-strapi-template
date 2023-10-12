<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import type { Restaurant } from '~/types'
const { find, findOne, create, update, delete: remove } = useStrapi()
</script>