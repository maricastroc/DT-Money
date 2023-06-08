import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { RemoveTransactionModal } from '../../components/RemoveTransactionModal'
import { Pagination } from './components/Pagination'

import {
  DateItem,
  IconContainer,
  TransactionsContainer,
  TransactionCardData,
  TransactionsList,
  TransactionCardText,
  PriceHighlight,
  Tag,
  TransactionCard,
} from './styles'

import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { TagSimple, CalendarBlank, Trash } from 'phosphor-react'

export function Transactions() {
  const {
    transactionsPerPage,
    allTransactions,
    renderPagination,
    setTransactionToRemove,
  } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsList>
          {renderPagination
            ? transactionsPerPage.map((transaction) => {
                return (
                  <TransactionCard key={transaction.id}>
                    <TransactionCardText>
                      <p>{transaction.description}</p>
                      <strong>
                        <PriceHighlight variant={transaction.type}>
                          {transaction.type === 'outcome' && '- '}
                          {priceFormatter.format(transaction.price)}
                        </PriceHighlight>
                      </strong>
                    </TransactionCardText>
                    <TransactionCardData>
                      <Tag>
                        <span>
                          <TagSimple size={16} alt="Tag Icon" />
                        </span>
                        <p>{transaction.category}</p>
                      </Tag>
                      <DateItem>
                        <span>
                          <CalendarBlank size={16} alt="Calendar Icon" />
                        </span>
                        <p>
                          {dateFormatter.format(
                            new Date(transaction.createdAt),
                          )}
                        </p>
                        <Dialog.Root>
                          <Dialog.Trigger asChild>
                            <IconContainer>
                              <Trash
                                alt="Trash Icon"
                                size={20}
                                onClick={() =>
                                  setTransactionToRemove(transaction)
                                }
                              />
                            </IconContainer>
                          </Dialog.Trigger>
                          <RemoveTransactionModal />
                        </Dialog.Root>
                      </DateItem>
                    </TransactionCardData>
                  </TransactionCard>
                )
              })
            : allTransactions.map((transaction) => {
                return (
                  <TransactionCard key={transaction.id}>
                    <TransactionCardText>
                      <p>{transaction.description}</p>
                      <strong>
                        <PriceHighlight variant={transaction.type}>
                          {transaction.type === 'outcome' && '- '}
                          {priceFormatter.format(transaction.price)}
                        </PriceHighlight>
                      </strong>
                    </TransactionCardText>
                    <TransactionCardData>
                      <Tag>
                        <span>
                          <TagSimple size={16} alt="Tag Icon" />
                        </span>
                        <p>{transaction.category}</p>
                      </Tag>
                      <DateItem>
                        <span>
                          <CalendarBlank size={16} alt="Calendar Icon" />
                        </span>
                        <p>
                          {dateFormatter.format(
                            new Date(transaction.createdAt),
                          )}
                        </p>
                        <Dialog.Root>
                          <Dialog.Trigger asChild>
                            <IconContainer>
                              <Trash
                                alt="Trash Icon"
                                size={20}
                                onClick={() =>
                                  setTransactionToRemove(transaction)
                                }
                              />
                            </IconContainer>
                          </Dialog.Trigger>
                          <RemoveTransactionModal />
                        </Dialog.Root>
                      </DateItem>
                    </TransactionCardData>
                  </TransactionCard>
                )
              })}
        </TransactionsList>
        <Pagination />
      </TransactionsContainer>
    </div>
  )
}
