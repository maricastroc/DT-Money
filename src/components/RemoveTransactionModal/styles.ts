import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 100%;
  border-radius: 12px;
  padding: 2rem;
  background-color: ${(props) => props.theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 480px) {
    min-width: 28rem;
  }

  @media (min-width: 625px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 35rem;
    padding: 2rem;
    border-radius: 6px;
  }
`

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  line-height: 1.8rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2rem;
`

export const TransactionData = styled.ul`
  text-align: left;
  list-style-type: none;
  width: 100%;
  margin: 0 auto;

  li + li {
    margin-top: 0.5rem;
  }

  strong {
    margin-right: 0.3rem;
    color: ${(props) => props.theme['blue-300']};
  }

  span {
    text-transform: capitalize;
  }

  @media (min-width: 625px) {
    width: 80%;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`

// eslint-disable-next-line prettier/prettier
export const ConfirmButton = styled.button`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  padding: 0.8rem;
  gap: 0.5rem;
  border-radius: 6px;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  background-color: ${(props) => props.theme['blue-700']};

  svg {
    color: ${(props) => props.theme.white};
  }

  &:hover {
    background-color: ${(props) => props.theme['blue-500']};
    transition: 200ms;
  }
`

export const CloseButton = styled(Dialog.Close)`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  padding: 0.8rem;
  gap: 0.5rem;
  border-radius: 6px;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  background-color: ${(props) => props.theme['orange-700']};

  svg {
    color: ${(props) => props.theme.white};
  }

  &:hover {
    background-color: ${(props) => props.theme['orange-500']};
    transition: 200ms;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['orange-500']};
  }
`
