import * as Dialog from '@radix-ui/react-dialog'
import { useContext } from 'react'
import {
  ConfirmButton,
  ButtonsContainer,
  CloseButton,
  Content,
  Overlay,
  Title,
  TransactionData,
} from './styles'
import {
  Transaction,
  TransactionsContext,
} from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { Check, X } from 'phosphor-react'

export function RemoveTransactionModal() {
  const { removeTransaction, transactionToRemove, setTransactionToRemove } =
    useContext(TransactionsContext)

  async function handleRemoveNewTransaction(transaction: Transaction) {
    await removeTransaction(transaction.id)
    setTransactionToRemove(null)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>
          Are you sure you want to remove the following transaction?
        </Title>
        <TransactionData>
          <li>
            <strong>Description: {''}</strong>
            <span>{transactionToRemove?.description}</span>
          </li>
          <li>
            <strong>Price: {''}</strong>
            <span>{priceFormatter.format(transactionToRemove?.price!)}</span>
          </li>
          <li>
            <strong>Category: {''}</strong>
            <span>{transactionToRemove?.category}</span>
          </li>
          <li>
            <strong>Type: {''}</strong>
            <span>{transactionToRemove?.type}</span>
          </li>
          <li>
            <strong>Date: {''}</strong>
            <span>
              {transactionToRemove?.createdAt &&
                dateFormatter.format(new Date(transactionToRemove?.createdAt!))}
            </span>
          </li>
        </TransactionData>
        <ButtonsContainer>
          <ConfirmButton
            onClick={() => {
              transactionToRemove !== null &&
                handleRemoveNewTransaction(transactionToRemove)
            }}
          >
            <Check size={22} />
            Yes, delete it.
          </ConfirmButton>
          <CloseButton>
            <X size={22} />
            No, cancel it!
          </CloseButton>
        </ButtonsContainer>
      </Content>
    </Dialog.Portal>
  )
}
