import axios from 'axios'


export default {
	baseURL: '127.0.0.1:1000/',
	settings: {
		headers: {
			Authorization: '',
		}
	},


	setAuth() {
		this.settings.headers['Content-Type'] = 'application/json';
		this.settings.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
	},


	get(path, callBack, callBackData) {
		this.setAuth();
		this.settings.onDownloadProgress = function (progressEvent) {
			let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
			if (callBack) {
				callBack(percentCompleted,callBackData)
			}
		};
		return new Promise((resolve, reject) => {
			axios.get(this.baseURL + path,  this.settings
			).then(response => {
				resolve(response.data);
			}).catch(error => {
				reject(error.response.data);
			})
		})
	},

  openPost(path, body) {
		return new Promise((resolve, reject) => {
			axios.post(this.baseURL + path, body)
      .then(response => {
				if(response.data) {
					resolve(response.data);
				} else {
					resolve()
				}
			}).catch(error => {
				reject(error.response.data);
			})
		})
	},

  openGet(path) {
		return new Promise((resolve, reject) => {
			axios.get(this.baseURL + path)
      .then(response => {
				if(response.data) {
					resolve(response.data);
				} else {
					resolve()
				}
			}).catch(error => {
				reject(error.response.data);
			})
		})
	},


	post(path, body, callBack, callBackData, cancelToken) {
		this.setAuth();
		this.settings.onUploadProgress = function (progressEvent) {
			let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
			if (callBack) {
				callBack(percentCompleted,callBackData)
			}
		};
		if(cancelToken) {
			this.settings.cancelToken = cancelToken;
		}
		return new Promise((resolve, reject) => {
			axios.post(this.baseURL + path, body, this.settings
			).then(response => {
				if(response.data) {
					resolve(response.data);
				} else {
					resolve()
				}
			}).catch(error => {
				reject(error.response.data);
			})
		})
	},

	patch(path, body) {
		this.setAuth();
		return new Promise((resolve, reject) => {
			axios.patch(this.baseURL + path, body, this.settings
			).then(response => {
				if(response.data) {
					resolve(response.data);
				} else {
					resolve();
				}
			}).catch(error => {
				reject(error.response.data);
			})
		})
	},

	delete(path) {
		this.setAuth();
		return new Promise((resolve, reject) => {
			axios.delete(this.baseURL + path, this.settings
			).then(response => {
				resolve(response.data);
			}).catch(error => {
				reject(error.response.data);
			})
		})
	}


}
