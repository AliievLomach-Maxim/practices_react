import styled from 'styled-components'

export const Container = styled.div`
    cursor: pointer;
    position: fixed;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    box-shadow: 0 0 16px gray;
    border-radius: 24px;
    margin: 0 0 0 24px;
    padding: 12px 24px;

    img {
        box-shadow: 0 0 12px inset gray;
    }

    figcaption {
        text-align: center;

        font-size: 30px;
        font-weight: 600;
        margin-bottom: 48px;
    }

    p {
        box-shadow: 0 0 6px gray;
        border-radius: 12px;
        padding: 12px;
    }
`
