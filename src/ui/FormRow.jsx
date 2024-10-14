import styled from "styled-components";

const StyledFormRow = styled.div`
  gap: 1.2rem;
  align-items: center;

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
    justify-content: space-evenly;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  width: fit-content;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ customStyle, label, error, children, gridCols }) {

  return (
    <StyledFormRow style={{display: customStyle, gridTemplateColumns: gridCols }}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
