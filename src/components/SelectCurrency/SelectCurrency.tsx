import React from "react";
import * as Select from "@radix-ui/react-select";
interface SelectCurrencyProps {
  data?: [string, string][];
}

export const SelectCurrency = ({ data }: SelectCurrencyProps) => {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value>Select Currency</Select.Value>
      </Select.Trigger>
      <Select.Content>
        {data?.map(([value, name]) => (
          <Select.Item value={value}>
            {value} - {name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};
