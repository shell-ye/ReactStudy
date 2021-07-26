import axios from 'axios'
import { DEV_API } from '@/api/config'

const instance = axios.create({
    baseURL: DEV_API,
    withCredentials: true,
    timeout: 3000
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 拦截器
instance.interceptors.request.use(config => {
    // 后期做进度条 - 开启
	return config
},error => {
  	return Promise.reject(error);
})

instance.interceptors.response.use(response => {
    // 后期做进度条 - 关闭
	return response
},error => {
  	return Promise.reject(error)
})

const request = (method = 'GET', url, data, options) => {
    let result = new Promise((resolve, reject) => {
        if ( method === 'GET' ) {
            instance.get(url, {
                params: data
            }, options).then(res => resolve(res)).catch(err => reject(err))
        } else {
            instance.post(url, {
                data
            }, options).then(res => resolve(res)).catch(err => reject(err))
        }
    })

    result.then(res => {
        // 后期做处理
    }).catch(err => {
        console.log('网络错误')
    })

    return result
}

export default request