import React, { useId } from "react";

function CurrencyInput({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  onCurrencyChange,
  convertCurrency,
  disabled = false,
}) {
  const amountInputId = useId();

  return (
    <div className="bg-[#ffffffd4] rounded-md p-4 w-full sm:w-[30rem] flex flex-col gap-4">
      <div className="flex justify-between items-center text-xl text-zinc-500">
        <label htmlFor={amountInputId} className="cursor-pointer">{label}</label>
        <p className="hidden sm:block">Currency Type</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-y-4 mb-4 sm:mb-0 justify-between items-center text-xl text-zinc-900">
        <input
          type="number"
          className="border-none outline-none px-4 bg-inherit max-w-[100%]"
          placeholder="Enter Amount"
          value={amount}
          id={amountInputId}
          onChange={(e) => {
            onAmountChange && onAmountChange(e.target.value)
            convertCurrency()
          }}
          disabled={disabled}
        />
        <select
          className="bg-slate-100 p-2 font-semibold rounded-md cursor-pointer"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value)
            convertCurrency()
          }}
        >
          {currencyOptions.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyInput;
