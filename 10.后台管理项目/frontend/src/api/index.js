import { BASE_URL } from './config'

const api = {
    // 获取店铺地址
    GET_SHOP_ADDRESS: `${ BASE_URL }/v1/pois`,

    // 获取店铺类别
    GET_SHOP_CATEGORY: `${ BASE_URL }/shopping/v2/restaurant/category`
}

export default api
