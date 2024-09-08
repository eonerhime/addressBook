import styled, { css } from "styled-components";

const sizes = {
  small: css`
    /* font-size: 1.2rem; */
    padding: 0.4rem 0.8rem;
   /* text-transform: uppercase;*/
    /* font-weight: 600; */
    text-align: center;
  `,

  medium: css`
    font-size: 1.4rem;
    padding: 1rem 1rem;
    font-weight: 500;
  `,

  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,

  link: css`
    border: none;
    text-align: start;
    font-size: 1.125rem;
    --tw-text-opacity: 1;
    background-color: none;
    color: rgb(30 41 59 / var(--tw-text-opacity)) /* #1e293b */;
  `
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,

  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
 
  link: css`
    box-shadow: none;
    border-radius: 0;
    font-size: 1.5rem;
    background: transparent;
    color: rgb(30 41 59 / var(--tw-text-opacity)) /* #1e293b */;

    &:hover {
      --tw-text-opacity: 1;
      color: rgb(37 99 235 / var(--tw-text-opacity)) /* #2563eb */;
    }
  `,
 
  edit: css`
    border-width: 1px;
    padding-left: 1rem /* 16px */;
    padding-right: 1rem /* 16px */;
    padding-top: 0.25rem /* 4px */;
    border-radius: 0.5rem /* 8px */;
    padding-bottom: 0.25rem /* 4px */;
    color: #f1f5f9;
    background-color: #15803d;
    &:hover {
      background-color:  #4ade80 
    };
  `,
 
  new: css`
    border-width: 2px;
    border-radius: 0.5rem;
    transition-property: all;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
     transform: scale(1.2); 
    };
  `,

  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);

  ${(props) => sizes[props.size]};
  ${(props) => variations[props.option]};
`;

Button.defaultProps = {
  size: "medium",
  option: "primary",
};

export default Button;
