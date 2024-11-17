import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmRestore = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmRestore({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmRestore>
      <Heading as="h3">Restore {resourceName}</Heading>
      <p>Are you sure you want to restore this {resourceName}?</p>

      <div>
        <Button option="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button option="edit" disabled={disabled} onClick={onConfirm}>
          Restore
        </Button>
      </div>
    </StyledConfirmRestore>
  );
}

export default ConfirmRestore;
