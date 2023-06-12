import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { dateStringFormatter, priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'
import { useLastOutcome } from '../../hooks/useLastOutcome'
import { useLastIncome } from '../../hooks/useLastIncome'

export function Summary() {
  const summary = useSummary()
  const lastOutcome = useLastOutcome()
  const lastIncome = useLastIncome()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp color="#06ABC1" alt="Incomes" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
        {dateStringFormatter(lastIncome?.createdAt) !== '' && (
          <p>
            Last entrance at {''}
            {dateStringFormatter(lastIncome?.createdAt)}
          </p>
        )}
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown color="#DD6554" alt="Outcomes" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
        {dateStringFormatter(lastOutcome?.createdAt) !== '' && (
          <p>
            Last entrance at {''}
            {dateStringFormatter(lastOutcome?.createdAt)}
          </p>
        )}
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
