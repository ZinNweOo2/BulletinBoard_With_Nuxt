import { SET_POST_LIST } from './mutation-types'
export default {
    [SET_POST_LIST](state, list) {
        state.postList = list
    },
}