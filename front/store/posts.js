export const state = () => ({
    mainPosts: []
});

export const mutations = {
    addMainPost(state, payload) {
        state.mainPosts.unshift(payload);
    },
    removeMainPost(state, payload) {
        const index = state.mainPosts.findIndex(v => v.id === payload.id);
        state.mainPosts.splice(index, 1);
    },
    addComment(state, payload) {
        const index = state.mainPosts.findIndex(v => v.id === payload.postId);
        state.mainPosts[index].Comments.unshift(payload);
    }
};

export const actions = {
    add({ commit }, payload) {
        // 서버에 게시글 등록 요청
        commit('addMainPost', payload);

        // index의 addMainPost를 호출하고 싶을 경우
        // commit('addMainPost', payload, { root: true });
    },
    remove({ commit }, payload) {
        commit('removeMainPost', payload);
    },
    addComment({ commit }, payload) {
        commit('addComment', payload);
    }
};