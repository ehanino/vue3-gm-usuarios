import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null,
    refreshToken: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
  actions: {
    setTokens(accessToken, refreshToken) {
      this.accessToken = accessToken
      this.refreshToken = refreshToken
      // Opcionalmente, guarda los tokens en localStorage
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
    },
    clearTokens() {
      this.accessToken = null
      this.refreshToken = null
      // Limpia los tokens de localStorage
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    },
    initializeAuth() {
      // Recupera los tokens de localStorage al iniciar la aplicación
      const accessToken = localStorage.getItem('accessToken')
      const refreshToken = localStorage.getItem('refreshToken')
      if (accessToken && refreshToken) {
        this.setTokens(accessToken, refreshToken)
      }
    },
  },
})