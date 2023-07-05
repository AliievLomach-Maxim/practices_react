import { StyledButton } from './Button.styled'

const Button = ({ handleClick, text, center }) => {
    return (
        <StyledButton center type="button" onClick={handleClick}>
            {text}
        </StyledButton>
    )
}

export default Button
