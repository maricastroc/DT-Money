import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass, X } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string().min(1, 'Query is required'),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchTransactions(data: SearchFormInputs) {
    setTimeout(() => {
      console.log(data)
    }, 1000)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search for a transaction"
        {...register('query')}
      />
      <X size={20} onClick={() => reset()} />
      <button type="submit" disabled={isSubmitting || !isValid}>
        <MagnifyingGlass size={20} />
        <span>Search</span>
      </button>
    </SearchFormContainer>
  )
}
