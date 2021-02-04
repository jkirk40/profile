import React, { useState, useEffect } from 'react';

import Backend from '../Backend/Backend';

export default function BasicField (props) {
    let [ info, setInfo ] = useState([]);
    let [ input, setInput ] = useState('')

    useEffect(() => {
        getField();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getField = async() => {
        const result = await Backend().getField(props.field)
        setInfo(result)
    }

    const handleInputChange = (event) => {
        const target = event.target;
        setInput(target.value);
    }

    const handleClick = async () => {

    } 

    return (
        <div>
            <span>{props.field}: {info}</span>
            <span>
                <input 
                    type="text" 
                    name={props.field}
                    value={input}
                    onChange={handleInputChange}/>
                <button onClick={handleClick}>update</button>
            </span>
        </div>
    )
}