import { GET_SHOP_ADDRESS, GET_SHOP_CATEGORY } from './actionType'
import api from '../api'
import request from 'Utils/request'

const shopAdd = {
    // 模糊搜索店铺地址
    getShopAddress (keyword) {
        return async dispatch => {
            const result = await request('GET', api.GET_SHOP_ADDRESS, {
                type: 'search',
                city_id: 25,
                keyword
            })

            dispatch({
                type: GET_SHOP_ADDRESS,
                payload: result.data
            })
        }
    },

    // 获取店铺分类列表
    getShopCategory () {
        return async dispacth => {
            let result = await request('GET', api.GET_SHOP_CATEGORY)
            let data = result.data.map(item => {
                item.label = item.name
                item.value = item.name
                if ( item.sub_categories ) {
                    item.children = item.sub_categories
                    item.children.map(items => {
                        items.label = items.name
                        items.value = items.name
                    })
                }
                return item
            })

            dispacth({
                type: GET_SHOP_CATEGORY,
                payload: data
            })
        }
    }
}

export default shopAdd