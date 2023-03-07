import styled from "styled-components";

export const StyledForm = styled.div`
  margin-top: -100px;
  form {
    background-color: #161d2f;
    border-radius: 10px;
    width: 75vw;
    max-width: 400px;
    padding: 24px;
    margin-top: 50px;
  }
  input {
    width: 90%;
    text-align: left;
    background: none;
    border: none;
    color: #ffffff;
    border-bottom: 1px solid ${({ error }) => (error ? "#FC4747" : "#5A698F")};
    height: 37px;
    font-size: 15px;
    margin-bottom: 28px;
    padding: 0 15px;
    outline: none;
    caret-color: #fc4747;
    transition: all 0.3s ease;
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #fff !important;
    }
    :hover {
      cursor: pointer;
      border-bottom: 1px solid #ffffffbd;
      &::placeholder {
        color: #ffffffbd;
        opacity: 0.8;
      }
    }
    &:focus {
      ${({ error }) => (error ? "#FC4747" : "#FFFFFF")};
    }
    &::placeholder {
      color: ${({ error }) => (error ? "#FC4747" : "#5A698F")};
      opacity: 0.8;
    }
    }
    h1 {
      font-size: 32px;
      font-weight: 300;
      letter-spacing: -0.5px;
      text-align: left;
      color: #ffffff;
      margin-bottom: 30px;
    }
    .button {
      width: 100%;
      height: 48px;
      background: #fc4747;
      color: #ffffff;
      border: 0 solid transparent;
      border-radius: 6px;
      font-size: 15px;
      font-weight: 300;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      transition: all 0.3s ease;
      margin-top: 12px;
      margin-bottom: 24px;
      &:not(:disabled):hover {
        color: #fc4747;
        background: #ffffff;
      }
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
    p {
      color: #ffffff84;
      font-weight: 300;
      text-align: center;
      margin-top: 20px;
    }
`;

export const Paragraph = styled.span`
  width: 100%;
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  .nostyle {
    margin-left: 5px;
    text-decoration: none;
    color: #FC4747;
  }
`;