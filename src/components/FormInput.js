// Input component that displays what the user types in an input field
// The input is allowed a maximum of 100 characters
// A counter displays the number of characters remaining

import React, { useState } from 'react';

function FormInput() {

    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <h1>Form Input</h1>
            <input type="text" placeholder='Type here...' maxLength={100} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h2>Output: {inputValue}</h2>
            <h3>Characters Remaining: {100 - inputValue.length}</h3>
        </div>
    )
}

export default FormInput;