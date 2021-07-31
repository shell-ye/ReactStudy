import request from "@/utils/request"

// 获取电影详情
export const getMovieDetails = id => {
    return request('GET', `/api/mtrade/mmdb/movie/v5/${ id }.json`)
}

// 获取电影播放日期
export const getShowDate = movieId => {
    return request('GET', `/api/mtrade/mmcs/show/v1/movie/showdays.json`, {
        movieId,
        channelId: 4,
        cityId: 83
    })
}

// 获取日期内播放电影的影院
export const getMovieCinema = (movieId, showDate) => {
    return request('GET', '/api/mtrade/mmcs/cinema/v1/select/movie/cinemas.json', {
        limit: 20,
        offset: 0,
        utm_term: 7.5,
        client: 'iphone',
        channelId: 4,
        areaId: -1,
        brandId: -1,
        districtId: -1,
        hallType: -1,
        lineId: -1,
        movieId,
        serviceId: -1,
        stationId: -1,
        showDate,
        cityId: 83,
        ci: 83
    })
}