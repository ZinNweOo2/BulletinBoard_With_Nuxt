import { mapGetters } from 'vuex'

export default {
    auth: false,
    data() {
        return {
            showTop: false,
        }
    },
    computed: {
        ...mapGetters({
            userData: 'createPost/userData',
        }),
    },
    mounted() {
        if (this.userData == null) {
            this.$router.push('/post/confirmPost')
        }
    },
    methods: {
        confirmPost() {
            console.log('bae')
            const formData = new FormData()
            this.$store.dispatch('createPost/savePost', {
                formData,
                $axios: this.$axios,
            })
        },
    },
}