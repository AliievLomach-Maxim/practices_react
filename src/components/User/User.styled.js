import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Title = styled.h2`
    color: red;
    text-shadow: 1px 1px 2px teal;
    &:hover {
        text-shadow: 1px 1px 0.5em teal;
        cursor: pointer;
    }
`

export const Text = styled.p`
    color: teal;
    text-shadow: 0 0 2px white;
`

export const NativeText = styled.span`
    color: ${({ isEndedBiz }) => (isEndedBiz ? 'red' : 'yellow')};
    ${Text}:hover & {
        text-shadow: 1px 1px 0.5em teal;
    }
`

export const StyledButton = styled.button`
    cursor: pointer;
    min-width: 120px;
    padding: 10px;
    background-color: burlywood;
    border-radius: 8px;
    display: block;
    margin-top: 10px;
`

export const StyledLink = styled(Link)`
    cursor: pointer;
    width: 120px;
    padding: 10px;
    background-color: burlywood;
    text-align: center;
    border-radius: 8px;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    color: black;
    box-shadow: 0 0 12px black;
    &:hover {
        box-shadow: 0 0 18px black;
    }
`
