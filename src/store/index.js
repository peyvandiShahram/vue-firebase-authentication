import { createStore } from 'vuex';
import { auth, userCollection } from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLogedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth: (state) => {
      state.userLogedIn = !state.userLogedIn;
    },
  },
  actions: {
    async register({ commit }, payload) {
      const userInfo = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password,
      );
      // console.log(userInfo);
      await userCollection.doc(userInfo.user.uid).set({
        name: payload.name,
        email: payload.email,
        password: payload.password,
        age: payload.age,
      });

      userInfo.user.updateProfile({
        displayName: payload.name,
      });
      commit('toggleAuth');
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(
        payload.email,
        payload.password,
      );
      // console.log(userInfo);

      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit('toggleAuth');
      }
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
    userLogedInStatus: (state) => state.userLogedIn,
  },
});
