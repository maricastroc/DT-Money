import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const SelectTrigger = styled(Select.SelectTrigger)`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: none;
  padding: 1rem;
  background-color: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-500']};
  z-index: 10;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    color: ${(props) => props.theme['gray-500']};
    border: 0;
  }
`

export const SelectContent = styled(Select.SelectContent)`
  position: fixed;
  display: flex;
  align-items: start;
  top: 18rem;
  left: 1.45rem;
  width: 21.5rem;
  padding: 0.5rem 0;
  color: ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['gray-900']};
  border: none;
  border-radius: 6px;
  z-index: 10;

  @media (min-width: 1024px) {
    width: 26rem;
    left: 3rem;
  }
`

export const SelectViewport = styled(Select.SelectViewport)`
  width: 20rem;

  @media (min-width: 1024px) {
    width: 30rem;
  }
`

export const SelectItem = styled(Select.SelectItem)`
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1;
  color: ${(props) => props.theme['gray-500']};
  border: 0;
  display: flex;
  align-items: center;
  height: 1.8rem;
  padding: 0 1.2rem;
  user-select: none;
  z-index: 10;

  &:focus {
    color: ${(props) => props.theme['blue-300']};
    border: 0;
    box-shadow: none;
  }
`

export const SelectLabel = styled(Select.SelectLabel)`
  color: ${(props) => props.theme['gray-800']};
`

export const SelectGroup = styled(Select.SelectGroup)`
  width: 30rem;
`
