import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConvertCurrencySchema, ConvertData } from "./ConvertCurrencySchema";
export const useConvertCurrencyForm = () => {
  return useForm<ConvertData>({ resolver: zodResolver(ConvertCurrencySchema) });
};
