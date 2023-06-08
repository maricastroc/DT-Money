import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContext } from 'react'

export function useLastIncome() {
  const { allTransactions } = useContext(TransactionsContext)

  const incomes = allTransactions.filter(
    (transaction) => transaction.type === 'income',
  )

  incomes.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  return incomes[0]
}
