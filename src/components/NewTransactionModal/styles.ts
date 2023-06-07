import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

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
  padding: 2rem 1.5rem;
  background-color: ${(props) => props.theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: none;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      cursor: pointer;
      height: 50px;
      border: 0;
      background-color: ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme.white};
      font-weight: 700;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;

      &:hover {
        background-color: ${(props) => props.theme['blue-700']};
        transition: background-color 200ms;
      }
    }
  }

  @media (min-width: 480px) {
    min-width: 28rem;
  }

  @media (min-width: 625px) {
    min-width: 32rem;
    padding: 2rem 3rem;
    border-radius: 6px;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

// eslint-disable-next-line prettier/prettier
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background-color: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.variant === 'income'
          ? props.theme['blue-500']
          : props.theme['orange-500']};
  }

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['blue-300']
        : props.theme['orange-300']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['blue-500']
        : props.theme['orange-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state='unchecked'] {
    &:hover {
      background-color: ${(props) => props.theme['gray-600']};
      transition: background-color 200ms;
    }
  }
`