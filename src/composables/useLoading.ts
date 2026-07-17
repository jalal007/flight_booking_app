import { computed, ref } from 'vue'

export const useLoading = (initialState = false) => {
  const loading = ref(initialState)

  const startLoading = (): void => {
    loading.value = true
  }

  const stopLoading = (): void => {
    loading.value = false
  }

  const withLoading = async <T>(task: () => Promise<T>): Promise<T> => {
    startLoading()

    try {
      return await task()
    } finally {
      stopLoading()
    }
  }

  return {
    isLoading: computed(() => loading.value),
    startLoading,
    stopLoading,
    withLoading,
  }
}
