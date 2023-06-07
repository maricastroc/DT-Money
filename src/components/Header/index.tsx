import * as Dialog from '@radix-ui/react-dialog'

import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoContainer,
  Title,
  TransactionBtn,
} from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <Logo src="./assets/icon.svg" alt="" />
          <Title>DT Money</Title>
        </LogoContainer>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <TransactionBtn>New transaction</TransactionBtn>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
