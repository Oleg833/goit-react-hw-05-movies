import styled from 'styled-components';

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 5px;
  max-width: 600px;
  display: flex;
  justify-content: center;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  border: none;
  outline: none;
  padding: 10px;
  margin: 0 20px;
  &::placeholder {
    color: #3f51b550;
    font: inherit;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 78px;
  height: 48px;
  margin-right: 20px;
  margin-top: 3px;
  border: 0;
  opacity: 0.6;
  font-size: 20px;
  font-weight: 600;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: blueviolet;
  &:hover {
    opacity: 1;
  }
`;
