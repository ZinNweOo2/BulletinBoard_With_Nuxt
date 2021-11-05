import {
    extend,
    ValidationProvider,
    ValidationObserver,
    setInteractionMode,
} from 'vee-validate'
import {
    required,
    email,
    image,
    digits,
    regex,
    numeric,
    max,
    min,
    size,
    confirmed,
} from 'vee-validate/dist/rules'
import { mapGetters } from 'vuex'
setInteractionMode('eager')
extend('required', {
    ...required,
    message: '{_field_} can not be empty',
})
extend('numeric', {
    ...numeric,
    required: '{_field_} must be number',
})
extend('email', {
    ...email,
    message: 'Your email name is invalid',
})
extend('image', {
    ...image,
    message: 'please select img file',
})
extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ',
})
extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
})
extend('min', {
    ...min,
    message: '{_field_} may not be greater than {length} characters',
})
extend('size', {
    ...size,
    message: `file size is grater than {size} kb`,
})
extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match 09*********',
})
extend('confirmed', {
    ...confirmed,
    message: '{_field_} {_value_} does not match',
})

export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    auth: false,
    data() {
        return {
            userForm: {
                name: '',
                email: '',
                password: '',
                passwordconfirm: '',
                type: '',
                phone: '',
                address: '',
                dob: '',
                profile: '',
                image: null,
            },
            selected: null,
            options: [
                { value: 'Admin', text: 'Admin' },
                { value: 'User', text: 'User' },
            ],
        }
    },
    computed: {

        ...mapGetters({
            userData: 'createUser/userData',
        }),
    },
    created() {
        if (this.userData) {
            this.userForm = this.userData
            this.$store.dispatch('createUser/cancel')
        }
    },
    methods: {
        async userRegister() {
            console.log('hello')
            const isValid = await this.$refs.observer.validate()
            if (isValid) {
                this.$store.dispatch('createUser/validateUser', {
                    userData: this.userForm,
                    $axios: this.$axios,
                })
            } else {
                alert('Error')
            }
        },
        onFileChange(e) {
            if (e.target.files[0]) {
                const file = e.target.files[0]
                this.userForm.image = URL.createObjectURL(file)
            }
        },
    },
}