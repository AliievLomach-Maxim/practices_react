import styled from 'styled-components'

export const StyledButton = styled.button`
    cursor: pointer;
    min-width: 120px;
    padding: 10px;
    background-color: burlywood;
    border-radius: 8px;
    display: block;
    margin-top: 10px;
    margin: ${({ center }) => (center ? '0 auto 24px' : '')};
`
