import styled from 'styled-components'

export const Container = styled.div`
    box-shadow: 0px 0px 48px gray;
    margin: 0 auto;
    width: 600px;
    border-radius: 12px;
    padding: 24px 0 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
        text-align: center;
    }
    div {
        display: flex;
        justify-content: center;
    }
    a.homeLink {
        padding-left: 24px;
        color: blue;
    }
`
