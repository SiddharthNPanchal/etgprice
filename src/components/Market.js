import React from 'react'
import "../styles/market.css";
import {CgWebsite}  from 'react-icons/cg';
import preview from "../assets/price-preview.png"
import { Link } from 'react-router-dom';
import Calc from './calc'
function Market({
    price,
    marketcap,
    priceChange,
    high,
    low,
    market_cap,
    total_supply,
    bitcoin,
    supply
}) {

    const market = [
        {
            image: preview,
            title: "Ethereum Price Preview: May 10 – 16",
            details: "Last week, we discussed new all-time highs in price along with global milestones and upcoming network updates. This week, we’ll take a look at how all of these factors impacted price and sentiment, along with other factors at play in today’s crypto markets."
        },
        {
            image: preview,
            title: "Ethereum Price Preview: May 3 – 9",
            details: "Last week, we covered the market dip as well as our reasons for why the price correction was likely temporary. This week, we’re taking a look at ETH’s explosive new all-time highs and the fundamental factors underlying price action."
        },
        {
            image: preview,
            title: "Ethereum Price Preview: April 26 – May 2",
            details: "Ethereum has once again hit new all-time highs since our last piece which dealt with upcoming network developments and booming NFT sales. The cryptocurrency has since pulled back whilst fundamentals stay as strong as ever."
        },
        {
            image: preview,
            title: "Ethereum Price Preview: April 19 – 25",
            details: "Last week, we discussed new all-time highs in price along with global milestones and upcoming network updates. This week, we’ll take a look at how all of these factors impacted price and sentiment, along with other factors at play in today’s crypto markets."
        },
        {
            image: preview,
            title: "Ethereum Price Preview: April 12 – April 18",
            details: "This week, we’ll focus on the progress made and milestones reached since then, including an all-time high in price spurred on by major network developments."
        }
        
        

    ]

    const genesys = [
        {
            resource: 'Website',
            link:'https://www.ethereumgenesys.org/'
        },
        {
            resource: 'Whitepaper',
            link:''
        },
        {
            resource: 'Block Explorer',
            link:''
        },
        {
            resource: 'Github',
            link:''
        }
    ]

    const social = [
        {
            profile: 'Twitter',
            link:'https://twitter.com/EthereumGenesys'
        },
        {
            profile: 'Reddit',
            link:'https://www.reddit.com/user/ethereumgenesys'
        },
        {
            profile: 'Youtube',
            link:''
        }
    ]

    const checkVal = (e, link)=>{
        if(link !== ''){
            window.location.href = link
        }
        else{
            alert("Coming soon!")
        }
    }

    const checkProfile = (e, link)=>{
        if(link !== ''){
            window.location.href = link
        }
        else{
            alert("Coming soon!")
        }
    }

    

    console.log(bitcoin)
    return (
        <>
        
        <div className="market">
        <div className="discord" >We've just launched our Discord  chat server.<span className="discordlink">&nbsp;Join the conversation!</span></div><br/>
        <div className="marketdetails">
            {/* <div className="details">
                Ethereum Market Updates
                {
                    market.map(m=>{
                        return(
                            <div className="info">
                                <img className="border" src={m.image} height="150px" width="250px"/>
                                <div className="textdetails"> 
                                    <p className="price_preview">{m.title}</p>
                                    <p className="detail_Info">{m.details}</p>
                                </div>
                            </div>
                        )
                    })
                }
                    
            </div> */}
        
            <div className="price">
                      <div className="priceDiv">ETG Price</div>  
                      <br/>
                      <table cellPadding='0' cellSpacing='0'>
                            <tr>
                                <td >CURRENT PRICE</td>
                                <td >{(price/100).toFixed(2)}</td>
                            </tr>

                            <tr>
                                <td >24H LOW</td>
                                <td >{(low/100).toFixed(2)}</td>  
                            </tr>

                            <tr>
                                <td >24H HIGH</td>
                                <td >{(high/100).toFixed(2)}</td>
                            </tr>
                            
                            <tr>
                                <td >24H CHANGE (%)</td>
                                <td >{priceChange.toFixed(2)}</td>
                            </tr>

                            <tr>
                                <td>MARKET CAP</td>
                                <td>$320B</td>
                            </tr>

                            <tr>
                                <td >CIRCULATING SUPPLY</td>
                                <td >{supply}</td>
                            </tr>

                        </table>
                         

            </div>
            <div className="rightDiv">
                                <div className="e-title">Ethereum Genesys</div><br />
                                <div className="resourcesMain">
                                    {
                                        genesys.map(i=>{
                                            return (
                                                <div className='resources' onClick={()=>checkVal(i.resource.toLowerCase(), i.link)}>{i.resource}</div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="e-title">Social Profiles</div><br />
                                <div className="resourcesMain">
                                {
                                        social.map(i=>{
                                            return (
                                                <div className='resources' onClick={()=>checkProfile(i.profile.toLowerCase(), i.link)}>{i.profile}</div>
                                            )
                                        })
                                    }
                                    
                                </div>
                                
                            </div>
        </div>   
        </div>
        </>
    )
}

export default Market
