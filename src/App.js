import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./components/Header"
import Data from "./components/Data"
import Market from "./components/Market"
import ChartData from "./components/ChartData"
import Prices from "./components/Prices"
import Guide from "./components/Guide"
import Validity from "./components/Validity"
import Etherum from "./components/Ethereum"
import Org from "./components/org"
import Footer from "./components/Footer"
import Bitcoin from "./components/Bitcoin"
import Calc from './components/calc'
import Buyetg from "./components/Buyetg"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import EtherContext from './context/etherContext'
import Etg from "./components/Etg"
import Cardano from './components/Cardano';
import WeekData from './components/WeekData'
import YearData from './components/YearData'
import Live from "./components/Live"
import Ranking from './components/Ranking';

function App() {

  let [bitcoin, setBitcoin] = useState(0);
  let [ether, setEther] = useState(0);
  let [bitcoincash, setBitcoincash] = useState(0);
  let [isLoading, setIsLoading] = useState(true);
  let [xrp, setXrp] = useState(0);
  let [price, setPrice] =useState(0);
  const [coins, setCoins] = useState([]);
  // const [filteredCoins, setFilteredCoins] = useState([])

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

      coins.map(coin => {
        if(coin.id == 'bitcoin'){
          // alert("yes")
          setBitcoin(coin.current_price);
        }
  
        if(coin.id == 'ripple'){
          // alert("yes")
          setXrp(coin.current_price);
        }
  
        if(coin.id == 'bitcoin-cash'){
          // alert("yes")
          setBitcoincash(coin.current_price);
        }
  
        if(coin.id == 'ethereum'){
          // alert("yes")
          setEther(coin.current_price);
        }
  
      });
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.includes('Ethereum')
  );

  useEffect(() => {
    if(bitcoin !== 0 && xrp !== 0 && ether !== 0){
      setIsLoading(false);
    }
  },[bitcoin, ether, xrp]);

  return (
    <div>
        <Router>
          <Switch>
            <Route path="/buy-etg">
                <Buyetg/>
            </Route>
                        
            <Route path="/btcweek">
                <WeekData id="bitcoin"/>
            </Route>
            
            <Route path="/btcyear">
                <YearData id="bitcoin"/>
            </Route>

            <Route path="/adaweek">
                <WeekData id="cardano"/>
            </Route>
            
            <Route path="/adayear">
                <YearData id="cardano"/>
            </Route>

            <Route path="/ethweek">
                <WeekData id="ethereum"/>
            </Route>
            <Route path="/ethyear">
                <YearData id="ethereum"/>
            </Route>

            <Route path="/bitcoin">
                <Bitcoin/>
            </Route>

            <Route path="/cardano">
                <Cardano/>
            </Route>

            <Route path="/ranking">
                <Ranking/>
            </Route>

            <Route path="/">
          <Header/>
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
              bitcoin = {bitcoin}
              />
            )
          })
        }
        <ChartData/>
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
              bitcoin={bitcoin}    
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
      </Route>
          </Switch>
        </Router>
        
          
        
    </div>
  );
}

export default App;
