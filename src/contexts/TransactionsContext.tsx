import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  allTransactions: Transaction[]
  transactionsPerPage: Transaction[]
  pagination: number
  setPagination: (value: number) => void
  fetchTransactions: (query?: string) => Promise<void>
  renderPagination: boolean
  setRenderPagination: (value: boolean) => void
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  removeTransaction: (id: number) => Promise<void>
  transactionToRemove: Transaction | null
  setTransactionToRemove: (transaction: Transaction | null) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([])
  const [transactionsPerPage, setTransactionsPerPage] = useState<Transaction[]>(
    [],
  )
  const [pagination, setPagination] = useState(1)
  const [renderPagination, setRenderPagination] = useState(true)
  const [transactionToRemove, setTransactionToRemove] =
    useState<Transaction | null>(null)

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setAllTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data
    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setAllTransactions((state) => [response.data, ...state])

    setTransactionsPerPage((state) => [response.data, ...state])
  }

  async function removeTransaction(id: number) {
    await api.delete(`transactions/${id}`)

    setAllTransactions((state) =>
      state.filter((transaction) => transaction.id !== id),
    )

    setTransactionsPerPage((state) =>
      state.filter((transaction) => transaction.id !== id),
    )
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  useEffect(() => {
    async function fetchTransactionsPagination() {
      const response = await api.get('transactions', {
        params: {
          _page: `${pagination}`,
          limit: '10',
          _sort: 'createdAt',
          _order: 'desc',
        },
      })

      setTransactionsPerPage(response.data)
    }

    fetchTransactionsPagination()
  }, [pagination])

  const TransactionsContextValue: TransactionsContextType = {
    allTransactions,
    transactionsPerPage,
    pagination,
    setPagination,
    fetchTransactions,
    renderPagination,
    setRenderPagination,
    createTransaction,
    removeTransaction,
    transactionToRemove,
    setTransactionToRemove,
  }

  return (
    <TransactionsContext.Provider value={TransactionsContextValue}>
      {children}
    </TransactionsContext.Provider>
  )
}
