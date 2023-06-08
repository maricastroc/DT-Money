import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass, X } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string().min(1, 'Query is required'),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions, setRenderPagination } =
    useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    setRenderPagination(false)
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <div>
        <input
          type="text"
          aria-label="Search for a transaction"
          placeholder="Search for a transaction"
          spellCheck={false}
          {...register('query')}
        />
        <X
          size={20}
          alt="Clear search"
          onClick={() => {
            setRenderPagination(true)
            fetchTransactions()
            reset()
          }}
        />
      </div>
      <button type="submit" disabled={isSubmitting || !isValid}>
        <MagnifyingGlass size={20} alt="Search" />
        <span>Search</span>
      </button>
    </SearchFormContainer>
  )
}
