import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import * as Select from '@radix-ui/react-select'
import { useState } from 'react'
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { SelectInput } from './components/SelectInput'

export function NewTransactionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<string | undefined>()

  const handleToggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleValueChange = (newValue: string) => {
    setValue(newValue)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="">
          <input placeholder="Description" type="text" required />
          <input placeholder="Price" type="number" required />
          <Select.Root
            open={isOpen}
            onOpenChange={handleToggleOpen}
            value={value}
            onValueChange={handleValueChange}
          >
            <SelectInput />
          </Select.Root>
          <TransactionType>
            <TransactionTypeButton value="income" variant="income">
              Incomes
              <ArrowCircleUp size={24} />
            </TransactionTypeButton>
            <TransactionTypeButton value="outcome" variant="outcome">
              Outcomes
              <ArrowCircleDown size={24} />
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
