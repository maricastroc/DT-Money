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
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [pagination, setPagination] = useState(1)

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch(`http://localhost:3000/transactions`)
      const data = await response.json()

      setAllTransactions(data)
    }

    loadTransactions()
  }, [pagination])

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch(
        `http://localhost:3000/transactions?_page=${pagination}&_limit=10`,
      )
      const data = await response.json()

      setTransactions(data)
    }

    loadTransactions()
  }, [pagination])

  const TransactionsContextValue: TransactionsContextType = {
    allTransactions,
    transactions,
    pagination,
    setPagination,
  }

  return (
    <TransactionsContext.Provider value={TransactionsContextValue}>
      {children}
    </TransactionsContext.Provider>
  )
}
