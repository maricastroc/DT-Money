import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for a transaction" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        <span>Search</span>
      </button>
    </SearchFormContainer>
  )
}
