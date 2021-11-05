import { mapGetters } from 'vuex'

export default {
    auth: false,
    // async asyncData({ $axios, store }) {
    //     try {
    //         await store.dispatch('post/fetchPostList', { $axios })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // },
    data() {
        return {
            show: true,
            form: {
                searchParam: '',
            },
            currentPage: 1,
            perPage: 2,
            fields: [
                { key: 'title', label: 'Post Title', sortable: true },
                {
                    key: 'description',
                    label: 'Post Description',
                    sortable: true,
                },
                { key: 'created_user', label: 'Posted User', sortable: true },
                { key: 'something', label: 'Posted Date', sortable: true },
                { key: 'operation', label: 'Operation' },
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
        goCreatePost() {
            console.log('hello')
            this.$router.push('/post/createPost')
        },
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