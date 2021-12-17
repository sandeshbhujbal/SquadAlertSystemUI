const ICON_TYPES = [
    'success',
    'warning',
    'info',
    'danger',
    'disabled'
]

export default {
    name: 'base-icon',

    props: {
        color: {
            type: String,
            default: '#87898c'
        },

        iconName: {
            type: String,
            required: true
        },

        type: {
            type: String,
            required: false,
            validator (value) {
                return ICON_TYPES.indexOf(value) !== -1
            }
        }
    },

    data () {
        return {
            bliIcon: null
        }
    },

    created () {
        this.lazyLoadIcon()
    },

    methods: {
        lazyLoadIcon () {
            const iconName = this.iconName
                .replace(/([A-Z])/g, '-$1')
                .toLowerCase()
                .slice(1)

            const icon = 'BliIcon' + this.iconName

            import('@blibli/blue-internal/dist/add-ons/icons/' + iconName)
                .then((icons) => {
                    this.bliIcon = icons[icon]
                })
            /** @todo handle icon not present and all other errors */
        }
    }
}
