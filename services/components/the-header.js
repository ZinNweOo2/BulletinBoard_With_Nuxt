export default {
    data({ $config: { appTitle } }) {
        return {
            appTitle,
        }
    },
    methods: {
        async logoutUser() {
            try {
                await this.$auth.logout()
            } catch (error) {
                console.error(error)
            }
        },
    },
}
