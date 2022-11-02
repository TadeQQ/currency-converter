import React from "react";
import {
  StyledConverter,
  Form,
  Div,
  Input,
  Swap,
  Convert,
} from "../styles/Converter.styled";
import { SelectCurrency } from "../SelectCurrency/SelectCurrency";
import { useFetchCurrencies } from "../../Hooks/useFetchCurrencies";
import { isRegularExpressionLiteral } from "typescript";
// handleFetchCurriencies();
export const Converter = () => {
  // const queryClient = useQueryClient();

  const { currencies, isLoading } = useFetchCurrencies({});

  // const queryArray = Object.keys(query.data);
  // const handleFetchCurriencies = async () => {
  //   const data = CurrenciesServices.fetchAllCurrencies();
  //   const a = await data;
  //   console.log(a);
  // };
  return (
    <StyledConverter>
      <Form action="">
        <Div className="amount">
          Amount <Input type="number" placeholder="1.00" />
        </Div>
        <Div className="from">
          <select>
            {currencies?.map(([value, name]) => (
              <option value={value} key={value}>
                {value} - {name}
              </option>
            ))}
          </select>
          {/* From <SelectCurrency data={currencies} {...register('from')}/> */}
        </Div>

        <Div className="to">
          {/* To <SelectCurrency data={currencies} /> */}
        </Div>
        <Convert className="convert Button">Convert</Convert>
      </Form>
    </StyledConverter>
  );
};
