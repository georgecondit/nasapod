<template>
  <div class="pod-details" v-if="state.activePod.id">
     <img
      :src="`https://api.nasa.gov/planetary/apod?api_key=rrwLZtzNBLQwhjaheaypt2JkcK8239EckLexeXcC`" alt="Picture of the Day"
    >
    <p>{{state.activePod.url}}</p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'image-details',
  setup () {
    const state = reactive({
      activePod: computed(() => AppState.activePod)
    })
    return {
      state
    }
  },
  components: {
  }
}
</script>

<style scoped>

</style>
