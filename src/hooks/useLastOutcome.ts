import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContext } from 'react'

export function useLastOutcome() {
  const { allTransactions } = useContext(TransactionsContext)

  const outcomes = allTransactions.filter(
    (transaction) => transaction.type === 'outcome',
  )

  outcomes.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  return outcomes[0]
}
