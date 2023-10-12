<template>
  <div>
    <ul>
      <li v-for="restaurant in restaurants?.data" :key="restaurant.id">
        {{ restaurant.attributes.Name }}
        <button @click="$router.push(`${$route.path}restaurant/${restaurant.id}`)">Edit</button>
        <button @click="deleteRestaurant(restaurant.id)">Delete</button>
      </li>
    </ul>

    <nuxt-link :to="`${$route.path}/restaurant/create`">Create</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { Restaurant } from '~/types'
const { find, delete: remove } = useStrapi() // delete is keyword in JS, must not be used
const { data: restaurants, refresh } = await useAsyncData(
  'restaurants',
  () => find<Restaurant>('restaurants')
)
console.log('restaurants: ', restaurants);

const deleteRestaurant = async (restaurantId: number) => {
  await remove<Restaurant>("restaurants", restaurantId);
  refresh()
};
</script>