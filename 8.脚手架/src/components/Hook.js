import React, { useState } from 'react'

export default function Component ( props ) {
    let [value, setValue] = useState(0)

    return (
        <div>
            <p>数据：{ value }</p>
            <button onClick={() => {setValue(value + 1)}}>修改数据</button>
        </div>
    )
}

