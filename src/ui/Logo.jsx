import styled from "styled-components";

const StyledLogo = styled.div`
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/address-book.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
