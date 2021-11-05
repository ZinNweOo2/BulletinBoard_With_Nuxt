import {
    extend,
    ValidationProvider,
    ValidationObserver,
    setInteractionMode,
} from 'vee-validate'
import {
    required,
    email,
    size,
    max,
} from 'vee-validate/dist/rules'
import { mapGetters } from 'vuex'

setInteractionMode('eager')
extend('required', {
    ...required,
    message: '{_field_} can not be empty',
})

extend('email', {
    ...email,
    message: 'Your email name is invalid',
})

extend('size', {
    ...size,
    message: `file size is grater than {size} kb`,
})
extend('max', {
    ...max,
    message: `file size is grater than {max} kb`,
})
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    auth: false,
    data() {
        return {
            post: {
                title: '',
                description: '',
            },

        }
    },
    computed: {
        ...mapGetters({
            validationError: 'createPost/validationError',
        }),
    },
    created() {
        if (this.userData) {
            this.post = this.userData
            this.$store.dispatch('post/cancel')
        }
    },
    mounted() {},
    methods: {
        async submitPost() {
            console.log('hey')
            const isValid = await this.$refs.observer.validate()
            if (isValid) {
                this.$store.dispatch('createPost/validatePost', {
                    userData: this.post,
                    $axios: this.$axios,
                })
            }
        },
    }

}