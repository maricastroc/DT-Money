import React, { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { PageButton, PagesContainer, PaginationContainer } from './styles'
import { CaretLeft, CaretRight } from 'phosphor-react'
import classNames from 'classnames'

export function Pagination() {
  const { allTransactions, transactions, pagination, setPagination } =
    useContext(TransactionsContext)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number,
  ) => {
    if (!event.currentTarget.classList.contains('off')) {
      setPagination(page)
    }
  }

  return (
    <PaginationContainer>
      <CaretLeft
        size={32}
        className={pagination === 1 ? 'unabled' : ''}
        onClick={() => setPagination(pagination - 1)}
      />
      <PagesContainer defaultValue="1">
        <PageButton
          onClick={(event) => handleChangePage(event, 1)}
          value="1"
          className={pagination === 1 ? 'active' : ''}
        >
          1
        </PageButton>
        <PageButton
          onClick={(event) => handleChangePage(event, 2)}
          value="2"
          className={classNames({
            active: pagination === 2,
            off: allTransactions.length < 10,
          })}
        >
          2
        </PageButton>
        <PageButton
          value="3"
          onClick={(event) => handleChangePage(event, 3)}
          className={classNames({
            active: pagination === 3,
            off: allTransactions.length < 20,
          })}
        >
          3
        </PageButton>
      </PagesContainer>
      <CaretRight
        size={32}
        className={classNames({
          unabled:
            pagination === 3 || (pagination === 2 && transactions.length < 10),
        })}
        onClick={() => setPagination(pagination + 1)}
      />
    </PaginationContainer>
  )
}
