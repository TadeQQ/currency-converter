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

export const SelectCurrency = React.forwardRef<
  HTMLButtonElement,
  SelectCurrencyProps
>(({ data, ...restProps }: SelectCurrencyProps, ref) => {
  return (
    <Select {...restProps}>
      <SelectTrigger ref={ref}>
        <SelectValue placeholder="Select Currency"></SelectValue>
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <StyledContent>
          <SelectViewport>
            {data?.map(([value, name]) => (
              <SelectItem value={value} key={value}>
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
});
