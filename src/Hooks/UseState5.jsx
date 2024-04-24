import React, { useState } from 'react'

const UseState5 = () => {
    let [items, setItems] = useState([])
    let addItems = () => {
        setItems([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1,
            }
        ])
    }
    console.log(items)
    return (
        <div>
            <button onClick={addItems}>ADD ITEMS</button>
            <ul>                                                                                                                   
                {
                    items.map((item) => {
                        return (
                            <li key={item.id}>{item.id}-{item.value}</li>)

                    })
                }
            </ul>
        </div>
    )
}

export default UseState5