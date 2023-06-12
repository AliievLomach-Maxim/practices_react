import styled from 'styled-components'

export const List = styled.ul`
    width: 500px;
    margin: 10px auto;
    padding: 0;
`

export const Li = styled.li`
    list-style-type: none;
    padding: 8px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gray;
    margin: 12px 0;
    border-radius: 12px;
    box-shadow: 0 -2px 4px silver;
    color: ${({ completed }) => (completed ? 'green' : 'black')};
    h3,
    p {
        padding: 0;
        margin: 3px 0;
    }
`

export const StatusBtn = styled.button`
    border-bottom: 2px solid gray;
    border-radius: 12px;
    box-shadow: 0 -2px 4px silver;
    background: inherit;
    font-size: 16px;
    font-weight: bold;
    margin-right: 8px;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const DeleteBtn = styled.button`
    border: none;
    background: inherit;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        transform: scale(2);
    }
`
