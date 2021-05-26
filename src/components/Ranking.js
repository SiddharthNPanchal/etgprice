import React , { useState, useEffect }from 'react'
import Header from "./Header"
import axios from 'axios';
import "../styles/ranking.css"

function Ranking() {

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
    console.log(coins)
    return (

        <>
        <Header className="headerDiv"/>
        <div className="rankingMain">
            
            <div className="ranking">
            <div className="coin">
                
                <div className="coinDetails">
                    <div className="coinDetail head">
                        Name
                    </div>
                    <div className="coinDetail head">
                        Symbol
                    </div>
                    <div className="coinDetail head">
                        Icon
                    </div>
                    <div className="coinDetail head">
                        Current Price
                    </div>
                    <div className="coinDetail head">
                        24H High
                    </div>
                    <div className="coinDetail head">
                        24H Low
                    </div>
                    <div className="coinDetail head">
                        Total supply
                    </div>
                    <div className="coinDetail head">
                        Circulating Supply
                    </div>
                </div>
                {
                    
                    coins.map(i => {
                        return (
                            <div className="coinDetails">
                                <div className="coinDetail">
                                    {i.name}
                                </div>
                                <div className="coinDetail">
                                    {(i.symbol).toUpperCase()}
                                </div>
                                <div className="coinDetail">
                                    <img src={i.image} height="40px" width="40px"/>
                                </div>
                                <div className="coinDetail head">
                                    ${i.current_price}
                                </div>
                                <div className="coinDetail">
                                    {i.high_24h}
                                </div>
                                <div className="coinDetail">
                                    {i.low_24h}
                                </div>
                                <div className="coinDetail">
                                    {i.total_supply == null ? '' : (i.total_supply).toFixed(1)}
                                </div>
                                <div className="coinDetail">
                                    {(i.circulating_supply).toFixed(1)}
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
        </div>

        </>        
    )
}

export default Ranking
