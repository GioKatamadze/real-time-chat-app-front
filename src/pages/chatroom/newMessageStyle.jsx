import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100vw;
    max-width: 648px;
    height: 8vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    textarea {
        width: 70%;
        height: calc(100% - 20px);
        resize: none;
        border: none;
        outline: none;
        font-family: 'Open Sans', sans-serif;
        background-color: #25438a;
        color: white;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset, rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        padding: 10px 10px;
        ::placeholder {
            color: white;
            font-family: 'Open Sans', sans-serif;
            font-weight: 300;
            opacity: 0.8;
        }
    }

    button {
        width: calc(30% - 20px);
        height: 100%;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        color: white;
        background-color: #2151e1;
        border: none;
        outline: none;
        font-size: small;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    @media only screen and (min-width: 600px) {
        width: calc(75vw + 48px);
        max-width: 648px;

        textarea {
            width: 90%;
        }

        button {
            width: 10%;
            font-size: medium;
        }
    }
`