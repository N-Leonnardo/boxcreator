import React, { useState } from  'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bcgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    `;
    const [bcgColor, setBcgColor] = useState("");
    
    const handleBcgColor = (e) => {
        setBcgColor(e.target.value);
    }

    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Color: </label>
                <input type="text" onChange={ handleBcgColor() } />

            <input type="submit" value="Create box" />
        </div>
        </form>
    );

export default StyledBox;
