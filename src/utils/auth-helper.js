import { authentication } from '@api/url'

export default {
    goToLogin () {
        window.location.href = authentication.login
    },
    goToLogout () {
        window.location.href = authentication.logout
    }
}
