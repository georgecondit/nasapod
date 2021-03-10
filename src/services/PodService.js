import { AppState } from '../AppState.js'
import { nasapodApi } from './AxiosService.js'

class PodService {
  async searchPods (date) {
    const res = await nasapodApi.get(`apod?api_key=rrwLZtzNBLQwhjaheaypt2JkcK8239EckLexeXcC&date=${date}`)
    AppState.pods = res.data
    console.log(res.data)
  }

  setActive (pod) {
    AppState.activePod = pod
  }
}

export const podService = new PodService()
