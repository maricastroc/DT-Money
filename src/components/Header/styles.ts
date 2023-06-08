import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (min-width: 425px) {
    gap: 1rem;
  }
`

export const Title = styled.strong`
  font-size: 1rem;

  @media (min-width: 425px) {
    font-size: 1.6rem;
    margin-top: 0.6rem;
  }
`

export const Logo = styled.img`
  width: 1.5rem;
  height: auto;

  @media (min-width: 1024px) {
    width: 2.5rem;
  }
`

export const TransactionBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  padding: 0.7rem 1rem;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;

  &:hover {
    background-color: ${(props) => props.theme['blue-700']};
    transition: 200ms;
    border: none;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
  }
`
