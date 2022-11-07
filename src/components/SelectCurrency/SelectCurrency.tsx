import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectViewport,
  StyledContent,
  SelectPortal,
  SelectIcon,
  SelectItemText,
  SelectItemIndicator,
} from "./SelectCurrency.styled";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

interface SelectCurrencyProps {
  data?: [string, string][];
}
export const SelectCurrency = ({ data }: SelectCurrencyProps) => {
  console.log(data);
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select Currency"></SelectValue>
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <StyledContent>
          <SelectViewport>
            {data?.map(([value, name]) => (
              <SelectItem value={value}>
                <SelectItemText>
                  {value} - {name}
                </SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectViewport>
        </StyledContent>
      </SelectPortal>
    </Select>
  );
};
