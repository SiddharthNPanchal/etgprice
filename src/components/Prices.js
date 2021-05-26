import React, {useEffect, useState} from 'react'
import "../styles/prices.css"
import btc from "../assets/btc.png"
import xrpImg from "../assets/xrp.png"
import ltc from "../assets/ltc.png"
import eos from "../assets/eos.png"
import axios from 'axios';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Prices() {

    let [bitcoin, setBitcoin] = useState(0);
    let [ether, setEther] = useState(0);
    let [bitcoincash, setBitcoincash] = useState(0);
    let [isLoading, setIsLoading] = useState(true);
    let [xrp, setXrp] = useState(0);

    const cryptoArray = [
        {
            image: btc,
            name: 'Bitcoin',
            tag: 'BTC',
            value: (bitcoin/(ether/100)).toFixed(2)
        },
        {
            image: xrpImg,
            name: 'XRP',
            tag: 'XRP',
            value: (xrp/(ether/100)).toFixed(6)
        },
        {
            image: ltc,
            name: 'Litecoin',
            tag: 'LTC',
            value:0.00073726 
        }
    ]

    useEffect(() => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
          )
          .then(res => {
            res.data.map(coin => {
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
              setIsLoading(false);
          })
          .catch(error => console.log(error));
    
      }, []);
    
    return (
        <div className="maincomponent">
            {isLoading === true ? '' : <div>
            <div className="component">
            <div className="relative" style={{color:'#cdcdcd'}}>
                
                Relative ETG Prices
                
            </div>

            <div className="dataImage">
                {
                    cryptoArray.map(c => {
                        return (
                            <div className="data">
                                <div>
                                    <img src={c.image} height="40" width="40"/>
                                <div className="dataDetails">
                                    <div style={{fontWeight:"bold"}}>{c.name}</div>
                                    <div style={{color:"gray", fontSize:"12px"}}>{c.tag}</div>
                                </div>
                                </div>   
                                <div style={{display:'flex'}}>
                                    <div>
                                        <FaIcons.FaBars style={{color:"black", marginTop:'12px'}} size='25px'/>
                                        </div>
                                        <div className="priceDetails">
                                        {c.value}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                

            

            </div>

            

        </div>
            </div>}
        </div>
        
    )
}

export default Prices
