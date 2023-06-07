import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp color="#06ABC1" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown color="#DD6554" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="blue">
        <header>
          <span>Total</span>
          <CurrencyDollar color="#ffffff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
