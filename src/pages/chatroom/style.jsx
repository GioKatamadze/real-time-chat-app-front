import styled from "styled-components";

export const StyledContainer = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #10141e;
`;

export const StyledForm = styled.div`
    transform: translateY(-40px);
    background-color: #161d2f;
    border-radius: 10px;
    width: 75vw;
    max-width: 400px;
    padding: 24px;
    margin-top: 50px;
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
    .buttonDiv, #home {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 48px;
        background: #fc4747;
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
`;

export const Chatroom = styled.div`
    width: 50%;
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
    .buttonDiv, #home {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 48px;
        background: #fc4747;
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
    @media (min-width: 768px) {
        width: calc(100% - 2.7%);
        margin-left: 2.7%;
        gap: 3%;
    }
    @media (min-width: 1440px) {
        width: 100%;
        margin-left: 0;
        gap: 2%;
    }
`