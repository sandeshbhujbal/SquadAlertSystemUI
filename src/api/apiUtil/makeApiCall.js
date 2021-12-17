import axios from 'axios'
export default {
	makeGetRequest (path, callback, fail) {
		axios.get(path).then(callback).catch(fail)
	},
	makeAsyncGetRequest (path) {
		return axios.get(path)
	},
	makeAsyncPostRequest (path, payload) {
		return axios.post(path, payload)
	},
	makePostRequest (path, callback, fail, payload) {
		axios.post(path, payload).then(callback).catch(fail)
	},
	makeDeleteRequest (path, callback, fail, payload) {
		axios.delete(path, { data: payload }).then(callback).catch(fail)
	},
	makePutRequest (path, callback, fail, payload) {
		axios.put(path, payload).then(callback).catch(fail)
	},
	makeDownloadRequest (path, callback, fail, payload) {
		axios.post(path, payload, { responseType: 'blob' }).then(callback).catch(() => {
			// There is response type issue here, if it is blob, some how for error is getting in wrong format
			// so hardcoding it.
			const error = {
				response: {
					code: 400,
					status: 'BAD_REQUEST',
					data: {
						code: 400,
						status: 'BAD_REQUEST',
						errors: {
							codes: ['NO_DATA_FOUND']
						}
					}
				}
			}
			fail(error)
		})
	},
	makeDownloadGetRequest (path, callback, fail) {
		axios.get(path, { responseType: 'blob' }).then(callback).catch(fail)
	}
}
