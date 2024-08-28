// stores/authStore.js
import { defineStore } from 'pinia'
// import { getUserInfoFromToken } from '../utils/jwtDecode'

export const useUserStore = defineStore('user', {
  state: () => ({
    accessToken: null,
    refreshToken: null,
    userId: null,
    userEmail: null,
    userFullName: null
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
  actions: {
    setUserInfo(accessToken, refreshToken, userId, userEmail, userFullName) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      this.userId = userId;
      this.userEmail = userEmail;
      this.userFullName = userFullName;
    },
    clearUserInfo() {
      this.accessToken = null;
      this.refreshToken = null;
      this.userId = null;
      this.userEmail = null;
      this.userFullName = null;
    }
    
  }
})