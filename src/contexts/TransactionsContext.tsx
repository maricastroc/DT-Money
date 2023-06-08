import { ReactNode, createContext, useEffect, useState } from 'react'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  allTransactions: Transaction[]
  transactions: Transaction[]
  pagination: number
  setPagination: (value: number) => void
  fetchTransactions: (query?: string) => Promise<void>
  renderPagination: boolean
  setRenderPagination: (value: boolean) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [pagination, setPagination] = useState(1)
  const [renderPagination, setRenderPagination] = useState(true)

  async function fetchTransactions(query?: string) {
    const url = new URL(`http://localhost:3000/transactions`)

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setAllTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  useEffect(() => {
    async function fetchTransactionsPagination() {
      const response = await fetch(
        `http://localhost:3000/transactions?_page=${pagination}&_limit=10`,
      )
      const data = await response.json()

      setTransactions(data)
    }

    fetchTransactionsPagination()
  }, [pagination])

  const TransactionsContextValue: TransactionsContextType = {
    allTransactions,
    transactions,
    pagination,
    setPagination,
    fetchTransactions,
    renderPagination,
    setRenderPagination,
  }

  return (
    <TransactionsContext.Provider value={TransactionsContextValue}>
      {children}
    </TransactionsContext.Provider>
  )
}
