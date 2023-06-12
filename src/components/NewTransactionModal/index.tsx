import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'

import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'

import { useContext, useState } from 'react'
import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { SelectInput } from './components/SelectInput'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const NewTransactionFormSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(1, 'Price is required'),
  category: z.enum(['Food', 'Salary', 'Sale', 'Items', 'Housing']),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction, fetchTransactions, setRenderPagination } =
    useContext(TransactionsContext)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleOpen = () => {
    setIsOpen(!isOpen)
  }

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data
    await createTransaction({
      description,
      price,
      category,
      type,
    })
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={24} alt="Close Button" onClick={() => reset()} />
        </CloseButton>
        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            placeholder="Description"
            aria-label="Description"
            spellCheck={false}
            type="text"
            required
            {...register('description')}
          />
          <input
            placeholder="Price"
            aria-label="Price"
            spellCheck={false}
            type="number"
            required
            {...register('price', { valueAsNumber: true })}
          />

          <Controller
            control={control}
            name="category"
            aria-label="Category"
            render={({ field }) => {
              return (
                <Select.Root
                  open={isOpen}
                  onOpenChange={handleToggleOpen}
                  onValueChange={field.onChange}
                >
                  <SelectInput />
                </Select.Root>
              )
            }}
          />

          <Controller
            control={control}
            name="type"
            aria-label="Type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton value="income" variant="income">
                    Incomes
                    <ArrowCircleUp size={24} alt="Incomes" />
                  </TransactionTypeButton>
                  <TransactionTypeButton value="outcome" variant="outcome">
                    Outcomes
                    <ArrowCircleDown size={24} alt="Outcomes" />
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            onClick={() => {
              setRenderPagination(true)
              fetchTransactions()
            }}
          >
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
