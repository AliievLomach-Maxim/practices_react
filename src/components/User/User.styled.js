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
