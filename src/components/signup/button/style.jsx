import styled from "styled-components";

export const Input = styled.button`
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
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;