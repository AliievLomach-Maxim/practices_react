import React from 'react'
import { StyledButton } from './Button.styled'

const Button = ({ handleClick, text }) => {
    return (
        <StyledButton type="button" onClick={handleClick}>
            {text}
        </StyledButton>
    )
}

export default Button
