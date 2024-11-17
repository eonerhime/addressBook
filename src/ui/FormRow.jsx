import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: ${props => props.customStyle};
  /* display: grid; */
  align-items: center;

  ${(props) =>
    props.type === "login" &&
    css`
      gap: 1rem;
      grid-template-columns: 1fr;
    `}

  ${(props) =>
    props.type !== "login" &&
    css`
      gap: 2.4rem;
      grid-template-columns: 24rem 1fr 1.2fr;
    `}

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
      props.btntype !== undefined &&
      css`
        justify-content: flex-end;
        gap: 1.2rem;
      `}

    ${(props) =>
      props.btntype === "formBtn" &&
      css`
        display: flex;
        max-width: 100%;
        justify-content: flex-start;
      `
    }

    ${(props) =>
      props.btntype === "phone" &&
      css`
          gap: 2.4rem;
          display: grid;
          /* max-width: 20rem; */
          padding: 1.2rem 0;
          align-items: center;
          grid-template-columns: 24rem 1fr 1.2fr;
        /* justify-content: flex-start; */
      `
    }
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, type, btntype, customStyle,children }) {

  return (
    <StyledFormRow type={type} btntype={btntype} customStyle={customStyle}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
