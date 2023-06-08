import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  input {
    appearance: none;
    position: relative;
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-900']};
    background-color: ${(props) => props.theme['gray-900']} !important;
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::selection {
      background-color: ${(props) => props.theme['gray-900']};
    }

    &:-webkit-autofill,
    &:-webkit-autofill-selection,
    &:-webkit-internal-autofill-selected {
      appearance: initial !important;
      background-color: ${(props) => props.theme['gray-900']} !important;
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  > svg {
    cursor: pointer;
    position: absolute;
    left: 74.5%;
    top: 49.2%;
    color: ${(props) => props.theme['gray-400']};
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 1px solid ${(props) => props.theme['blue-300']};
    padding: 0.5rem 0.75rem;
    background-color: transparent;
    color: ${(props) => props.theme['blue-300']};
    font-weight: 700;
    border-radius: 6px;

    span {
      display: none;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }

    &:not(:disabled):hover {
      border: 1px solid ${(props) => props.theme['blue-500']};
      background-color: ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 200ms, color 200ms, border-color 200ms;
    }

    @media (min-width: 1024px) {
      padding: 1rem;

      span {
        display: flex;
      }
    }
  }

  @media (min-width: 1024px) {
    gap: 1rem;
  }
`
