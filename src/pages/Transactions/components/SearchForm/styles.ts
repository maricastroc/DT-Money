import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-900']};
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
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

    &:hover {
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