import { SET_APPLICANT_DATA, SET_VALIDATE_ERROR } from './mutation-types'

export default {
    validatePost({ commit }, { userData, $axios }) {
        $axios
            .post('/api/validate', userData)
            .then((data) => {
                if (data) {
                    this.$router.push({
                        path: '/post/confirmPost',
                    })
                    commit(SET_APPLICANT_DATA, userData)
                    commit(SET_VALIDATE_ERROR, null)
                }
            })
            .catch((err) => {
                commit(SET_VALIDATE_ERROR, err.response.data)
            })
    },
    savePost({ commit }, { formData, $axios }) {
        try {
            $axios
                .post('api/post/create', formData)
                .then((data) => {
                    if (data) {
                        this.$router.push({
                            name: 'post-list',
                        })
                        commit(SET_APPLICANT_DATA, null)
                    }
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err.response.data)
                })
        } catch (error) {
            console.error(error)
        }
    },
}