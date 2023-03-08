import styled from "styled-components";

export const StyledContainer = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3765a9;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StyledForm = styled.div`
    background-color: #152c4f;
    border-radius: 10px;
    width: 75%;
    max-width: 400px;
    padding: 24px;
    h2 {
      font-size: 22px;
      font-weight: 300;
      letter-spacing: -0.5px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 30px;
      text-decoration: none;
    }
    .button {
      color: #ffffff;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 22px;
      font-weight: 300;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      text-decoration: inherit;
      transition: all 0.2s ease;
    }
    .buttonDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 48px;
        background: #fc4747af;
        border: 0 solid transparent;
        border-radius: 6px;
        transition: all 0.2s ease;
        text-decoration: inherit;
        margin-top: 30px;
        &:not(:disabled):hover {
            cursor: pointer;
            color: #1d1c1c;
            background: #ffffff;
            .button {
                color: #161414;
            }
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`;

export const Chatroom = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    color: white;

    .button {
      color: #ffffff;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 22px;
      font-weight: 300;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      text-decoration: inherit;
      transition: all 0.2s ease;
    }
    .chatroomDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 400px;
        height: 48px;
        background: #3e5eb6;
        border: 0 solid transparent;
        border-radius: 6px;
        transition: all 0.2s ease;
        text-decoration: inherit;
        margin-top: 20px;
        &:not(:disabled):hover {
            cursor: pointer;
            color: #1d1c1c;
            background: #ffffff;
            .button {
                color: #161414;
            }
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`