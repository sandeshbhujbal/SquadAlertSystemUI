import config from '@/config'
const authApiMocks = [
    {
        method: 'GET',
        url: config.api.auth.user,
        user: {
            userId: 'test',
            name: 'test',
            roles: {
                name: 'ROLE_LV_INTERNAL'
            }
        }
    }
]

export default authApiMocks
