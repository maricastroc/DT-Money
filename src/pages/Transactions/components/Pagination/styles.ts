import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  margin: 2.5rem auto 0;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${(props) => props.theme.white};
    cursor: pointer;

    &.unabled {
      color: ${(props) => props.theme['gray-600']};
      cursor: not-allowed;
    }
  }
`

export const PagesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const PageButton = styled.button`
  display: flex;
  gap: 0.5rem;
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 0.6rem 1rem;
  color: ${(props) => props.theme['gray-500']};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['gray-600']};
    transition: background-color 200ms;
  }

  &.active {
    background-color: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
  }

  &.off {
    cursor: not-allowed;
    background-color: ${(props) => props.theme['gray-700']};

    &:focus {
      box-shadow: none;
    }
  }
`
