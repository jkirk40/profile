import React, { useState, useEffect } from 'react';

import Backend from '../Backend/Backend';

import ListItem from './ListItem';

export default function ListField (props) {
    let [ list, setList ] = useState([]);
    let [ input, setInput ] = useState('');
    let [ warning, setWarning ] = useState('')

    useEffect(() => {
        getField();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getField = async() => {
        setWarning('processing...')
        const result = await Backend().getField(props.field)
        setList(result)
        setWarning('')
    }

    const handleInputChange = (event) => {
        const target = event.target;
        setInput(target.value);
    }

    const handleClick = async () => {
        setWarning('processing...')
        // In a real application this would not be an array of strings but objects with their own ids and other associated info
        await Backend().addToList(props.field, input)
        setWarning('')

        getField();
    } 

    return (
        <div>
            <h5>{props.field}</h5>
            {list.map((item, index) => {
                return(
                    <ListItem
                        key={index}
                        field={props.field}
                        getField={getField} 
                        item={item}
                    />
                )
            })}
            <div>
                <input 
                    type="text" 
                    name={props.field}
                    value={input}
                    onChange={handleInputChange}/>
                <button onClick={handleClick}>add item</button>
            </div>
            <p>{warning}</p>
        </div>
    )
}