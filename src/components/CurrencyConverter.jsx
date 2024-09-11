import React, { useState } from 'react';
import { CurrencyInput } from './index';
import useCurrencyInfo from '../hooks/useCurrencyInfo';

function CurrencyConverter() {
  const [amount, setAmount] = useState(''); // Initialize as an empty string
  const [convertedAmount, setConvertedAmount] = useState(''); // Initialize as an empty string
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertCurrency = () => {
    if (!amount) return; // Check for empty input
    setConvertedAmount((Number(amount) * currencyInfo[toCurrency]).toFixed(2)); // Convert and format the amount
  };

  return (
    <div className='p-4 sm:p-8 bg-[#ffffff38] w-full sm:w-fit flex flex-col gap-4 items-center backdrop-blur-[2px] rounded-md border border-zinc-500'>
      <div className='relative flex flex-col gap-4 items-center w-full'>
        <CurrencyInput
          label={"From"}
          amount={amount}
          currencyOptions={currencyOptions}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFromCurrency(currency)}
          selectedCurrency={fromCurrency}
          disabled={false}
          convertCurrency={convertCurrency}
        />
        <button
          className='bg-blue-500 z-10 absolute top-1/2 -translate-y-1/2 px-8 py-2 text-xl text-white font-semibold rounded-md'
          onClick={swapCurrency}
        >
          Swap
        </button>
        <CurrencyInput
          label={"To"}
          amount={convertedAmount}
          currencyOptions={currencyOptions}
          onAmountChange={(currency) => setConvertedAmount(currency)}
          onCurrencyChange={(currency) => setToCurrency(currency)}
          selectedCurrency={toCurrency}
          disabled={true}
          convertCurrency={convertCurrency}
        />
      </div>
    </div>
  );
}

export default CurrencyConverter;
