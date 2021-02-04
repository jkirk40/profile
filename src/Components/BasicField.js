import React, { useState, useEffect } from 'react';

import Backend from '../Backend/Backend';

export default function BasicField (props) {
    let [ info, setInfo ] = useState('');
    let [ input, setInput ] = useState('');
    let [ warning, setWarning ] = useState('')

    useEffect(() => {
        getField();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getField = async() => {
        setWarning('processing...')
        const result = await Backend().getField(props.field)
        setInfo(result)
        setWarning('')
    }

    const handleInputChange = (event) => {
        const target = event.target;
        setInput(target.value);
    }

    const handleClick = async () => {
        setWarning('processing...')
        // In a real application this would be our call to the API, e.g. /api/updateField
        // We would need to verify field before submitting, both here and on the back end
        // Valid email/phone, proper variable type, no SQL injection, etc.
        // Skipped here for time
        await Backend().setField(props.field, input)
        // If the backend returned a warning we would see it here and post a message for the user
        // In this case that's not possible so we just remove the loading text.
        setWarning('')

        // Make sure we display the updated info
        getField();
    } 

    return (
        <div>
            <span>{props.field}: {info} -------------- </span>
            <span>
                <input 
                    type="text" 
                    name={props.field}
                    value={input}
                    onChange={handleInputChange}/>
                <button onClick={handleClick}>update</button>
            </span>
            <span>{warning}</span>
        </div>
    )
}