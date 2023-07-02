import styled from 'styled-components'
import { Form } from 'formik'

export const CustomForm = styled(Form)`
    justify-content: center;
    padding: 12px;
    label {
        display: block;
        padding: 12px 0;
        margin-top: 18px;
    }
    label:first-child {
        margin-top: 0;
    }
    input {
        padding: 12px;
        width: 320px;
        font-weight: bold;
        font-size: 18px;
        border-radius: 8px;
    }
    button {
        cursor: pointer;
        width: 120px;
        padding: 10px;
        background-color: burlywood;
        border-radius: 8px;
        font-weight: 400;
        font-size: 18px;
    }
    a {
        padding: 0;
        color: blue;
        font-weight: 400;
        font-size: 18px;
    }
    div {
        font-weight: 600;
        color: red;
    }
    div.containerSubmit {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
