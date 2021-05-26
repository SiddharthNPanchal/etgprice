import React from 'react'
import "../styles/guide.css"
import ether from "../assets/etherprice.jpg"
import etherprice from "../assets/ethereum-bull-market.jpeg"
import valuation from "../assets/ethereum-valuation.jpg"
import bitcoin from "../assets/bitcoin.jpg"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

function Prices({etherVal, btcVal, xrpVal}) {

    const guideArray = [
        {
            image: ether,
            tag: "Live Price",
            tagLine: "Track the price of ethereum as the trade occurs",
            value: 'View Price'
        },
        {
            image: etherprice,
            tag: "Ethereum Price History",
            tagLine: "Historical ETH price data from August 2015 and available for download",
            value: 'View Price History'
        },
        {
            image: bitcoin,
            tag: "Bitcoin Price",
            tagLine: "Live price updates and historical data for the world's most valuable cryptocurrency",
            value: 'View Price'
        },
        {
            image: valuation,
            tag: "How to buy Ethereum",
            tagLine: "A step-by-step guide for buying, securing and investing in ETH",
            value: 'Read Article'
        }
    ]
    
    return (
        <div className="maincomponent">
            <div className="component">
            <div className="relative" style={{marginTop:"20px", color:"#cdcdcd"}}>
                Ethereum Price Guides
            </div>
            <ScrollAnimation animateIn="fadeIn">
            <div className="dataImage">
                {
                    guideArray.map(i => {
                        return (
                            <div className="dataD">
                        <div>
                        <img src={i.image} height="120" width="100%" style={{borderTopLeftRadius:"10px", borderTopRightRadius:"10px "}}/>
                        </div>
                            <div className="innerData" style={{fontFamily:"fira-sans"}}>
                                <span style={{fontWeight:"bold", marginTop:"10px", fontFamily:"fira-sans"}}>{i.tag}</span>
                                <span style={{color:'gray',margin:"10px 10px 0 20px", height:"80px", fontFamily:"fira-sans"}}>
                                    {i.tagLine}
                                </span>
                                <button className="button" style={{fontFamily:"sans-serif",marginTop:"-10px", fontFamily:"fira-sans"}} >{i.value}</button>
                            </div>    
                        </div> 
                        )
                    })
                }
                  
                </div>
            </ScrollAnimation>
            
    
        </div>
        </div>
        
    )
}

export default Prices
