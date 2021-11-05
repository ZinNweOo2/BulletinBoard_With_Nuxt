import { mapGetters } from 'vuex'

export default {
    auth: false,
    async asyncData({ $axios, store }) {
        try {
            await store.dispatch('post/fetchPostList', { $axios })
        } catch (error) {
            console.error(error)
        }
    },
    data() {
        return {
            show: true,
            form: {
                searchParam: '',
            },
            currentPage: 1,
            perPage: 2,
            fields: [
                { key: 'id', label: 'No', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                {
                    key: 'eamil',
                    label: 'Eamil',
                    sortable: true,
                },
                { key: 'created_user', label: 'Created User', sortable: true },
                { key: 'type', label: 'Type', sortable: true },
                { key: 'phone', label: 'Phone', sortable: true },
                { key: 'dob', label: 'Date Of Birth', sortable: true },
                { key: 'address', label: 'Address' },
            ],
            showList: [],
            infoModal: {
                id: 'info-modal',
                title: '',
                content: '',
            },
        }
    },
    computed: {
        ...mapGetters({
            postList: 'post/postList',
        }),
        rows() {
            return this.showList.length
        },
    },
    mounted() {
        this.filterPostList()
    },
    methods: {
        onSubmitSearch(event) {
            event.preventDefault()
            this.filterPostList()
                // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        filterPostList() {
            if (this.form.searchParam === '') {
                this.showList = this.postList
            } else {
                this.showList = this.postList.filter((post) => {
                    return (
                        post.title.includes(this.form.searchParam) ||
                        post.description.includes(this.form.searchParam) ||
                        post.created_user.includes(this.form.searchParam) ||
                        post.posted_date.includes(this.form.searchParam)
                    )
                })
            }
        },
        info(item, index, button) {
            this.infoModal.title = `Row index: ${index}`
            this.infoModal.content = JSON.stringify(item, null, 2)
            this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        },
        resetInfoModal() {
            this.infoModal.title = ''
            this.infoModal.content = ''
        },
        edit(item, index, button) {
            console.log('@edit...')
        },
        remove(item, index, button) {
            console.log('@remove...')
        },
    },
}