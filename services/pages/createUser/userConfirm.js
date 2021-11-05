import { mapGetters } from 'vuex'

export default {
    auth: false,
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            userData: 'createUser/userData',
        }),
    },
    methods: {
        confirmUser() {
            console.log("bo bo")
        }
    },
}