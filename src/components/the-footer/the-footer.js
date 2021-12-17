export default {
    name: 'the-footer',

    computed: {
        showFooter () {
            return !this.$route.meta.hideFooter
        }
    }
}
