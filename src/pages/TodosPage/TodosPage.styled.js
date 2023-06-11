import styled from 'styled-components'

export const List = styled.ul`
    width: 400px;
    margin: 10px auto;
    padding: 0;

    li {
        list-style-type: none;
        padding: 0 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid gray;
        margin: 12px 0;
        border-radius: 12px;
        box-shadow: 0 -2px 4px silver;
        h3,
        p {
            padding: 0;
            margin: 3px 0;
        }
        button {
            border: none;
            background: inherit;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            &:hover {
                cursor: pointer;
                transform: scale(2);
            }
        }
    }
`
