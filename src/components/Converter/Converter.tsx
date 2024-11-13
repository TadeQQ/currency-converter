import React from 'react';
import { ConverterStyles } from './Converter.styled';
import { SelectCurrency } from '../SelectCurrency/SelectCurrency';
import { useFetchCurrencies } from '../../Hooks/useFetchCurrencies';
import { useConvertCurrency } from '../../Hooks/convert/useConvertCurrency';
import { Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes';
export const Converter = () => {
  const navigate = useNavigate();
  const { currencies } = useFetchCurrencies({});
  const {
    form: {
      register,
      handleConvert,
      control,
      formState: { errors },
    },
  } = useConvertCurrency({
    onError: () => console.log(errors, 'błąd'),
    onSuccess: () => navigate(Routes.HISTORY),
  });

  return (
    <ConverterStyles.StyledConverter>
      <ConverterStyles.Form onSubmit={handleConvert}>
        <ConverterStyles.Div>
          <label>Amount</label>
          <ConverterStyles.Input
            type="number"
            placeholder="amount"
            {...register('amount', { valueAsNumber: true })}
          />
          {errors.amount?.message}
        </ConverterStyles.Div>
        <ConverterStyles.Div>
          <label htmlFor="from">From</label>
          <Controller
            control={control}
            name="from"
            render={({ field }) => (
              <SelectCurrency
                data={currencies}
                onValueChange={(value) => field.onChange(value)}
                {...field}
              />
            )}
          />
          {errors.from?.message}
        </ConverterStyles.Div>
        <ConverterStyles.Div>
          <label htmlFor="to">To</label>
          <Controller
            control={control}
            name="to"
            render={({ field }) => (
              <SelectCurrency
                data={currencies}
                onValueChange={(value) => field.onChange(value)}
                {...field}
              />
            )}
          />
          {errors.to?.message}
        </ConverterStyles.Div>
        <ConverterStyles.Convert type="submit">Convert</ConverterStyles.Convert>
      </ConverterStyles.Form>
    </ConverterStyles.StyledConverter>
  );
};
