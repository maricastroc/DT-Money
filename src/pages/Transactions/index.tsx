import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  DateItem,
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
import { TagSimple, CalendarBlank } from 'phosphor-react'
import { Pagination } from './components/Pagination'

export function Transactions() {
  const { transactions, allTransactions, renderPagination } =
    useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsList>
          {renderPagination
            ? transactions.map((transaction) => {
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
                  </TransactionCard>
                )
              })}
        </TransactionsList>
        <Pagination />
      </TransactionsContainer>
    </div>
  )
}
