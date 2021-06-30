// 增加
export const increase = age => {
    return {
        type: 'increase',
        data: age++
    }
}

// 减少
export const decrease = age => {
    return {
        type: 'decrease',
        data: age--
    }
}