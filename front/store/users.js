export const state = () => ({
    me: null,
});

// 동기적 작업
export const mutations = {
    setMe(state, payload) {
        state.me = payload;
    },
};

// 비동기 작업
export const actions = {
    signUp({ commit }, payload) {
        // 서버에 회원가입 요청
        commit('setMe', payload);
    },
    login({ commit }, payload) {
        commit('setMe', payload);
    },
    logout({ commit }, payload) {
        commit('setMe', null);
    },
};