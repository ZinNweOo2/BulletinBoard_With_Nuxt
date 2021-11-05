import { SET_APPLICANT_DATA, SET_VALIDATE_ERROR } from './mutation-types'
export default {
    [SET_APPLICANT_DATA](state, postInfo) {
        state.userData = postInfo
    },
    [SET_VALIDATE_ERROR](state, validationError) {
        state.validationError = validationError
    },
}