import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
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
import { Pagination } from './components/Pagination'

export function Transactions() {
  const {
    transactionsPerPage,
    allTransactions,
    renderPagination,
    removeTransaction,
  } = useContext(TransactionsContext)

  async function handleRemoveNewTransaction(id: number) {
    await removeTransaction(id)
  }

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
                          <TagSimple size={16} />
                        </span>
                        <p>{transaction.category}</p>
                      </Tag>
                      <DateItem>
                        <span>
                          <CalendarBlank size={16} />
                        </span>
                        <p>
                          {dateFormatter.format(
                            new Date(transaction.createdAt),
                          )}
                        </p>
                        <IconContainer>
                          <Trash
                            size={20}
                            onClick={() =>
                              handleRemoveNewTransaction(transaction.id)
                            }
                          />
                        </IconContainer>
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
                          <TagSimple size={16} />
                        </span>
                        <p>{transaction.category}</p>
                      </Tag>
                      <DateItem>
                        <span>
                          <CalendarBlank size={16} />
                        </span>
                        <p>
                          {dateFormatter.format(
                            new Date(transaction.createdAt),
                          )}
                        </p>
                      </DateItem>
                    </TransactionCardData>
                    <IconContainer>
                      <Trash size={20} />
                    </IconContainer>
                  </TransactionCard>
                )
              })}
        </TransactionsList>
        <Pagination />
      </TransactionsContainer>
    </div>
  )
}
