<template>
  <div class="pod-results border border-danger">
    <h3> Search Result:  {{state.apod.explanation}}</h3>
    <img :src="state.apod.url" alt="daily image">
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'podResults',
  setup () {
    const state = reactive({
      // NOTE computed watches for changes on any of its returned values
      apod: computed(() => AppState.pods)

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
li {
  cursor: pointer
}

li:hover {
  background-color: rgb(187, 186, 186);
}
</style>
