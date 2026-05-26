import InputBox from "./inputBox";
import useCurrencyConvertor from "../hooks/currencyConvertor";
import { useState } from "react";

function CurrencyComp() {
        const [amount, setAmount] = useState(0)
        const [from, setFrom] = useState("USD")
        const [to, setTo] = useState("INR")
        const [convertedAmount, setConvertedAmount] = useState(0)
        const currencyInfo = useCurrencyConvertor(from)
        const currencyOptions = Object.keys(currencyInfo)

          const convert = () => {
                  const rate = currencyInfo && currencyInfo[to] ? currencyInfo[to] : 0
                  setConvertedAmount(amount * rate)
          }
        

        return (
                <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
                        style={{
                        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                        }}>
                <div className="w-full">
                        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                                <form onSubmit={(e) => { 
                                        e.preventDefault()
                                        convert()
                                        }}>
                                                <h2>Currency Converter</h2>
                                                <InputBox
                                                        label="From"
                                                        className="mb-2"
                                                        amount={amount}
                                                        onAmountChange={(amount) => setAmount(amount)}
                                                        currencyOptions={currencyOptions}
                                                        selectCurrency={from}
                                                        onCurrencyChange={(currency) => setFrom(currency)}
                                                />
                                                <InputBox
                                                        label="To"
                                                        className="mb-5"
                                                        amount={convertedAmount}
                                                        currencyOptions={currencyOptions}
                                                        selectCurrency={to}
                                                        onCurrencyChange={(currency) => setTo(currency)}
                                                        amountDisable
                                                />
                                                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                                                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                                                </button>                
                                </form>
                        </div>
                </div>
                </div>
        )
}

export default CurrencyComp;
