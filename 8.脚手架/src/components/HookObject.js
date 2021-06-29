import React, { useState } from 'react'

export default function Component ( props ) {
    let [value, setValue] = useState({
        name: 'xiaye',
        age: 20
    })

    return (
        <div>
            <p>名字：{ value.name }， 年龄： { value.age }</p>
            <button onClick={() => {setValue(value.age + 1)}}>修改数据</button>
        </div>
    )
}