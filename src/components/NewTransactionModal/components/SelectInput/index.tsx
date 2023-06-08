import {
  SelectItem,
  SelectGroup,
  SelectViewport,
  SelectTrigger,
  SelectContent,
} from './styles'
import * as Select from '@radix-ui/react-select'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export function SelectInput() {
  return (
    <>
      <SelectTrigger aria-label="Category">
        <Select.Value placeholder="Category" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </SelectTrigger>
      <SelectContent className="SelectContent">
        <SelectViewport className="SelectViewport">
          <SelectGroup>
            <SelectItem value="Housing">
              <Select.ItemText>Housing</Select.ItemText>
            </SelectItem>
            <SelectItem value="Food">
              <Select.ItemText>Food</Select.ItemText>
            </SelectItem>
            <SelectItem value="Salary">
              <Select.ItemText>Salary</Select.ItemText>
            </SelectItem>
            <SelectItem value="Sale">
              <Select.ItemText>Sale</Select.ItemText>
            </SelectItem>
            <SelectItem value="Items">
              <Select.ItemText>Items</Select.ItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </>
  )
}
