// import { SET_POST_LIST } from './mutation-types'

// export default {
//     /**
//      * Fetch Post List API
//      * @param {Object} storeContext
//      * @param {Object} nuxtContext
//      * @returns
//      */
//     fetchPostList({ commit }, { $axios }) {
//         return $axios.$get('/api/posts').then(({ data = [] }) => {
//             commit(SET_POST_LIST, data)
//         })
//     },
// }