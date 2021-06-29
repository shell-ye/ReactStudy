import React, { useState } from 'react'

export default function Component ( props ) {
    let [value, setValue] = useState('夏叶')
    let [age, setAge] = useState(20)

    return (
        <div>
            <p>姓名：{ value }，年龄：{ age }</p>
            <button onClick={() => {setValue(value + 1)}}>修改数据</button>
            <button onClick={() => {setAge(age + 1)}}>修改年龄</button>
        </div>
    )
}

