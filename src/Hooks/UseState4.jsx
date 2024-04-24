import React, { useState } from 'react'

const UseState4 = () => {
    let [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <input type="text" value={name.firstName} onChange={(event) => setName({ ...name, firstName: event.target.value })} />
            <input type="text" value={name.lastName} onChange={(event) => setName({ ...name, lastName: event.target.value })} />
            <h1>firstName: {name.firstName}</h1>
            <h1>firstName: {name.lastName}</h1>
            <h1>{JSON.stringify(name)}</h1>
        </div>
    )
}

export default UseState4;