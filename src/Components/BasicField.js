import React, { useState, useEffect } from 'react';

import Backend from '../Backend/Backend';

export default function BasicField (props) {
    let [ info, setInfo ] = useState([]);

    useEffect(() => {
        getField();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getField = async() => {
        const result = await Backend().getField(props.field)
        setInfo(result)
    }

    return (
        <div>
            <p>{props.field}: {info}</p>
        </div>
    )
}