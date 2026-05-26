import { useState, useEffect } from "react";

function useCurrencyConvertor (toCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${toCurrency}`)
        .then((response) => response.json())
        .then((res) => {
          setData(res.rates);
        })
        .catch((error) => {
          console.error("Error fetching exchange rates:", error);
        });    
    }, [toCurrency]);  
    return data;
}

export default useCurrencyConvertor;