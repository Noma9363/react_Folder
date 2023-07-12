// coin
import { useEffect, useState } from "react";
function App() {
  const LIST_LOAD_ERROR = "not trased yet... :<";
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [usdloading, setUsdLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState("");
  const [transCoin, setTransCoin] = useState(0);
  const onCahnge = (e) =>{
    // findIndex -> 객체.findIndex(임시변수 => 임시변수.체크할영역(id) == 깂 비교)
    // console.log(coins.findIndex(i => i.id == e.target.value));
    let i = coins.findIndex(i => i.id == e.target.value);
    console.log(i);
    setIdx(i);
    
  }
  const keyInputChange = (e) => {
    setUsd(e.target.value);
    // console.log(usd);
    // console.log(e.target.value);
    // console.log(typeof e.target.value);
  }
  // 앱 전용 함수 : 최종적으로 값 변환하기
  const onClick = (e) => {
    e.preventDefault();
    if(usd != ""){
      let usdTemp = parseInt(usd);
      console.log(typeof usdTemp)
      console.log(usdTemp);
      console.log(coins[idx].quotes.USD.price);
      let resultTrans = ((1 / coins[idx].quotes.USD.price) * usdTemp);
      // ㄴ 환전 1 / USD 값 coins[idx].quotes.USD.price
      setTransCoin(resultTrans);
      console.log(resultTrans);
      setUsdLoading(true);
    }else setUsdLoading(false);
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
        {
          // idx check : console
          setIdx(0);
          console.log(idx);
        }
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
        <h2>
          {
            !usdloading ? 
              "wanna trans USD to Coin? Please Enter next input" 
              : 
              "transaction Completed!"
          }
        </h2>
        <div>
          <input 
            type="number"
            value={usd}
            onChange={keyInputChange}
            placeholder="0.00 USD" 
            required
          />
          <button onClick={onClick}>trans</button>
          <p>
            {usdloading ?
              <span>You can buy {transCoin} coin!</span> : 
              LIST_LOAD_ERROR
            }
          </p>
        </div>
      </form>
    </div>
  );
};

export default App;
