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
} from 'vee-validate/dist/rules'
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

export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            show: true,
        }
    },
    methods: {
        async userLogin(event) {
            event.preventDefault()
                // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
            try {
                await this.$auth.loginWith('local', {
                    data: this.form,
                })
            } catch (err) {
                console.error(err)
            }
        },
    },
}