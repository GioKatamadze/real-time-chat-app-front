import styled from "styled-components";

export const StyledContainer = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3765a9;
`;

export const StyledForm = styled.div`
    background-color: #203451;
    max-height: 84vh;
    color: white;
    width: 100vw;
    max-width: 600px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: rgba(0,0,0,0.01);
    }
    ::-webkit-scrollbar {
        width: 6px;
        background-color: rgba(0,0,0,0.01);
    }
    ::-webkit-scrollbar-thumb {
        background-color: #093a79;
    }

    .mychatWrapper {
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
    }
    .otherchatWrapper {
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .myMessage {
        max-width: 70%;
        font-weight: 400;
        font-size: 13px;
        width: max-content;
        background-color: #25438a;
        border-radius: 10px;
        padding: 10px;
        margin: 5px 15px 15px auto;
    }
    .otherMessage {
        max-width: 70%;
        font-weight: 400;
        font-size: 13px;
        width: max-content;
        background-color: #3765a9;
        border-radius: 10px;
        padding: 10px;
        margin: 5px auto 15px 15px;
    }
    .myauthor {
        margin-right: 20px;
        font-weight: 400;
        font-size: 11px;
    }
    .otherauthor {
        margin-left: 20px;
        font-weight: 400;
        font-size: 11px;
    }
    .message {
        text-align: left;
        line-height: 22px;
    }

    @media only screen and (min-width: 600px) {
        height: 80vh;
        width: 75vw;
        max-width: 600px;
        padding: 24px;

        .myMessage {
            max-width: 60%;
            border-radius: 10px;
            padding: 10px;
            margin: 5px;
            margin-bottom: 15px;
        }
        .otherMessage {
            max-width: 60%;
            border-radius: 10px;
            padding: 10px;
            margin: 5px;
            margin-bottom: 15px;
        }
        .author {
            margin: 5px;
        }
        .message {
            font-size: big;
            line-height: 25px;
        }
    }
`;

export const Header = styled.div`
    width: calc(75vw + 48px);
    max-width: 648px;
    height: 8vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    .back {
        height: max-content;
        padding: 10px;
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: small;
        color: white;
        background-color: #511414;
        border: none;
        outline: none;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    .sign {
        height: max-content;
        padding: 10px;
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: small;
        color: white;
        background-color: #08a2ba;
        border: none;
        outline: none;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }
`