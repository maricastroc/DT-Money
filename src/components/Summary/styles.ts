import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  overflow: scroll;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: -5rem;

  svg {
    font-size: 1.5rem;
  }

  @media (min-width: 825px) {
    overflow: hidden;
    gap: 2rem;

    svg {
      font-size: 2rem;
    }
  }
`

interface SummaryCardProps {
  variant?: 'blue'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 1.5rem 2rem;
  width: 13.7rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  ${(props) =>
    props.variant === 'blue' &&
    css`
      background-color: ${(props) => props.theme['blue-700']};
    `};

  @media (min-width: 625px) {
    width: 16rem;
  }

  @media (min-width: 825px) {
    padding: 2rem;
    width: auto;

    strong {
      font-size: 2rem;
    }
  }
`
