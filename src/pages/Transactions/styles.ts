import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsList = styled.div`
  width: 100%;
  display: grid;
  margin-top: 1.5rem;
  gap: 1rem;

  @media (min-width: 625px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const TransactionCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  padding: 1.25rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    padding: 1rem 2rem;
    justify-content: space-between;
    gap: 5rem;
  }
`

export const TransactionCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;

  strong {
    font-size: 1.25rem;
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
    align-items: flex-start;
    justify-content: left;
    text-align: left;

    strong {
      font-size: 1rem;
      font-weight: 400;
    }

    p {
      width: 25rem;
    }
  }
`

export const TransactionCardData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  opacity: 0.6;

  @media (min-width: 1024px) {
    margin-top: 0;
    width: 70%;
    opacity: 1;
  }
`

export const IconContainer = styled.button`
  display: flex;
  margin-left: 2rem;
  background-color: transparent;
  border: none;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme['gray-400']};

    &:hover {
      color: ${(props) => props.theme.white};
    }
  }
`

export const TransactionItem = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    strong {
      font-weight: 400;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? (props) => props.theme['blue-300']
      : (props) => props.theme['orange-300']};
`

export const Tag = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-size: 0.95rem;
  border-radius: 6px;
  text-transform: capitalize;

  > span {
    display: flex;
  }

  @media (min-width: 1024px) {
    display: auto;
    background-color: ${(props) => props.theme['gray-600']};
    padding: 0.5rem 1rem;

    > span {
      display: none;
    }
  }
`

export const DateItem = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  > span {
    display: flex;
  }

  @media (min-width: 1024px) {
    > span {
      display: none;
    }
  }
`
