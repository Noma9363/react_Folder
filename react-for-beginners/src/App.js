// coin
import { useEffect, useState } from "react";
function App() {
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [usdloading, setUsdLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const onCahnge = (e) =>{
    // findIndex -> 객체.findIndex(임시변수 => 임시변수.체크할영역(id) == 깂 비교)
    // console.log(coins.findIndex(i => i.id == e.target.value));
    let i = coins.findIndex(i => i.id == e.target.value);
    console.log(i);
    setIdx(i);
    
  }
  useEffect(() => {
    // url이 싱행되면 -> 응답받은 값 . json()으로 변환 -> coins 변수를 바꾸기위해 setCoins함수에 json 넣음
    // 1, 2, 3
    // input에 20달려를 가지고있다 가정하고 얼마의 코인을 가질 수 있는지 계산하는 
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  return (
    <div>
      <h1>the Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : 
        <select onChange={onCahnge}>
          {
            coins.map((coin) => 
              <option key={coin.id} value={coin.id} >
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>)
          }
        </select>}
      <form>
        <h2>You Got $20</h2>
        {!usdloading ? 
          <p>pick coin to transitions</p> : 
          <p>
            {
              idx === coins.id ? coins.quotes.USD.price : idx
            }
          </p> 
        }
        <input>여기에 변환할 값을 넣어라</input>
      </form>
    </div>
  );
};

export default App;
