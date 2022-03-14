import React, { useState } from 'react'

const Vegetable = ({name,qty}) => {
const [weight, setWeight] = useState(qty);

    return (
        <div>
            <h2>{name} : {weight} Kgs</h2>
            <button onClick={() => setWeight(weight + 1)}>+</button><button onClick={() => setWeight(weight - 1)}>-</button>
        </div>
    )
}

export default Vegetable;