import React from 'react'
import Header from "./Header"
import "../styles/buyetg.css"
import etoro from "../assets/etoro.png"
import coinbase from "../assets/coinbase.png" 
import changely from "../assets/changelly.png"
import bitpanda from "../assets/bitpanda.png"
import binance from "../assets/binance.png"
import eth from "../assets/eth.png"
import btc from "../assets/btc.png"
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';

function Buyetg() {

    const dataArray =  [
        {
            image: etoro,
            deposit: 1,
            currency: [
                {
                    name: eth
                },
                {
                    name: btc
                }
            ],
            features: [
                {
                    feature: "Trusted since 2007"
                },
                {
                    feature: "Available in your country"
                }
            ],
            methods: [
                {
                    method:  <FaIcons.FaCcMastercard/>
                },
                {
                    method: <FaIcons.FaCcVisa/>
                }
            ]   
        },
        {
            image: coinbase,
            deposit: 25,
            currency: [
                {
                    name: eth
                },
                {
                    name: btc
                }
            ],
            features: [
                {
                    feature: "Industry leader"
                },
                {
                    feature: "Available in your country"
                }
            ]
            
        },
        {
            image: changely,
            deposit: 0,
            currency: [
                {
                    name: eth
                },
                {
                    name: btc
                }
            ],
            features: [
                {
                    feature: "Trusted since 2007"
                },
                {
                    feature: "Available in your country"
                }
            ]
        },
        {
            image: bitpanda,
            deposit: 10,
            currency: [
                {
                    name: eth
                },
                {
                    name: btc
                }
            ],
            features: [
                
                {
                    feature: "Available in your country"
                }
            ]
        },
        {
            image: binance,
            deposit: 1,
            currency: [
                {
                    name: eth
                },
                {
                    name: btc
                }
            ],
            features: [
                {
                    feature: "High liquidity"
                },
                {
                    feature: "Available in your country"
                }
            ] 
        }
        
    ]
        
        
    

    return (
        <div>
            <Header/>
            <div className="mainBuy">
                <div className="buyDetails">
                    <div className="ether-title">How to buy Ethereum</div>
                    <div className="ether-detail">A comprehensive guide to safely buying, securing and investing Ether, the cryptocurrency of the Ethereum blockchain.</div>
                </div>
                <>
                    <div className="brokers">
                        <div className="ether-title">Top Ethereum Brokers/Exchanges</div>
                        <div className="ether-detail"></div>
                    </div>
                    <div>
                    {
                        dataArray.map((i)=>{
                            return(
                                <div className="exchange">
                                    <div className="icon">
                                        <img src={i.image} height="40" width="90"/>
                                    </div>

                                    <div className="deposit" >
                                        
                                            MIN. DEPOSIT
                                        
                                        <div className="dep-val">
                                            ${i.deposit}
                                        </div>
                                    </div>

                                    <div className="deposit" >
                                        
                                            CRYPTOCURRENCIES
                                        
                                        
                                        <div className="icons">
                                            {
                                                i.currency.map(j => {
                                                    return <img src={j.name} />
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className="deposit" >
                                        
                                            FEATURES
                                        
                                        <div className="icons">
                                            {
                                                i.features.map(j => {
                                                    return (
                                                        <div className="features">{j.feature}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className="deposit" >
                                        
                                            DEPOSIT METHODS
                                        
                                        
                                        <div style={{paddingTop:'20px', fontSize:'30px'}}>
                                        <IconContext.Provider value={{ color: '#fff'}}>
                                            <FaIcons.FaCcVisa  style={{paddingRight:'20px', color:'#6b6b6b'}}/>
                                            <FaIcons.FaCcMastercard style={{paddingRight:'20px', color:'#6b6b6b'}}/>
                                        </IconContext.Provider>
                                        </div>
                                    </div>

                                    <div className="buy-sell-div">
                                        <button className="buy-sell">BUY/SELL</button>
                                    </div>
                        </div>
                            )
                            
                        })
                    }
                    </div>
                    
                    
                </>
                
            </div>
        </div>
    )
}

export default Buyetg
