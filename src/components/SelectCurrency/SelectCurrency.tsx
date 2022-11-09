import React, { HtmlHTMLAttributes } from "react";
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
  RadixSelectProps,
} from "./SelectCurrency.styled";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useRef } from "react";

interface SelectCurrencyProps extends RadixSelectProps {
  data?: [string, string][];
}

///tutaj.
// React.forwardRef<
//   HTMLSelectElement,
//   SelectCurrencyProps
// >
export const SelectCurrency = ({ data, ...restProps }: SelectCurrencyProps) => {
  return (
    <Select {...restProps}>
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
