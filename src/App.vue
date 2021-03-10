<template>
  <div class="app">
    <header class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <h1> Welcome to NASA Picture of the day Viewer</h1>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="row">
        <div class="col">
          <form @submit.prevent="searchPods">
            <input class="mx-1" type="date" placeholder="yyyy-mm-dd" v-model="state.query">
            <button type="submit" class="btn btn-outline-success">Get POD</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <PodResults />
        </div>
        <div class="col-6">
          <PodDetails />
        </div>
      </div>
    </main>
    <footer class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <p class="m-3">by GEo</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { podService } from './services/PodService'
import { AppState } from './AppState'
import PodResults from './components/PodResults'
import PodDetails from './components/PodDetails'

export default {
  name: 'App',
  setup () {
    const state = reactive({
      query: '',
      movies: computed(() => AppState.pods)
    })
    return {
      state,
      async searchPods () {
        try {
          console.log(state.query)
          await podService.searchPods(state.query)
          state.query = ''
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    PodResults,
    PodDetails
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
