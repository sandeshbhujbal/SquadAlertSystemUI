// import { PORTAL_LOGIN_URL } from '@/data/global' TODO: initialize login path
// import { authentication } from '@api/url'

// export const cleanUrl = function (str = '') {
//     const javascriptProtocolRegex = /^javascript:/i
//     const httpsProtocol = 'https://'

//     return str.replace(javascriptProtocolRegex, httpsProtocol)
// }

// export const generateRedirectUrl = (current) => {
//     const ref = encodeURIComponent(`${window.location.origin}${current}`)
//     return `${PORTAL_LOGIN_URL}?ref=${ref}`
// }

// export const goTo = (url) => {
//     if (process.env.NODE_ENV !== 'testing') {
//         window.location.href = cleanUrl(url)
//     } else {
//         window.history.pushState({}, '', url)
//     }
// }
