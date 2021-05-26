import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BitcoinHeader from "./Bitcoin/BitcoinHeader"
import Data from "./Data"
import Market from "./Market"
import BitcoinChart from "./BitcoinChart"
import Prices from "./Prices"
import Guide from "./Guide"
import Validity from "./Validity"
import Etherum from "./Ethereum"
import Org from "./org"
import Etg from './Etg'
import Calc from './calc'

function Bitcoin() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

    const filteredCoins = coins.filter(coin =>
    coin.name.includes('Bitcoin')
  );


    return (
        <div>
            <BitcoinHeader/>
            {
            filteredCoins.map(coin=>{
            return(
              <Data
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              high={coin.high_24h}
              />
            )
          })
        }
        <BitcoinChart/>
        {
          filteredCoins.map(coin=>{
            return(
              <Market
              price={coin.current_price}
              marketcap={coin.total_volume}
              priceChange={coin.price_change_percentage_24h}
              high={coin.high_24h}
              low={coin.low_24h}
              market_cap={coin.market_cap}
              supply={coin.circulating_supply}          
              />

            )
          })
        }
        {
          filteredCoins.map(coin => {
            return (
              <Calc coin={coin}/>
            )
          })
        }
        <Prices />
        <Guide/>
        <Etherum/>
        <Validity/>
        <Etg/>
        </div>
    )
}

export default Bitcoin
