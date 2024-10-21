import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  ${(props) =>
    props.type === "login" &&
    css`
      gap: 1rem;
      grid-template-columns: 1fr;
      /* grid-template-rows: 1fr 1.2fr; */
    `}

  ${(props) =>
    props.type !== "login" &&
    css`
      gap: 2.4rem;
      grid-template-columns: 24rem 1fr 1.2fr;
    `}

  /* ${(props) =>
    props.type === "signup" &&
    css`
      gap: 2.4rem;
      max-width: 100%;
      grid-template-columns: 1fr 1fr;
    `} */

   padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;

    ${(props) =>
      props.btntype !== "formBtn" &&
      css`
        justify-content: flex-end;
        gap: 1.2rem;
      `}

    ${(props) =>
      props.btntype === "formBtn" &&
      css`
        /* display: block !important; */
        display: flex;
        max-width: 100%;
        justify-content: flex-start;
      `}
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, type, btntype, children }) {
  return (
    <StyledFormRow type={type} btntype={btntype}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
