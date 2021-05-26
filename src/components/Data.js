import {React, useEffect, useState, useContext} from 'react'
import EtherContext from '../context/etherContext'
import "../styles/data.css"
function Data({
        name,
        price,
        symbol,
        marketcap,
        volume,
        image,
        priceChange,
        high
})
    
 {
    let change = () => {
        if(high>price){
            return <div className="text-low">-{name == 'Ethereum' ? ((high-price)/100).toFixed(2) : ((high-price)).toFixed(2)}</div>
        }
        else{
            return <div className="text-high">{name == 'Ethereum' ? ((price-high)/100).toFixed(2): ((price-high)).toFixed(2)}</div>
        }
    }

    return (
        <>
        <div className="dataDiv">
            <div className="dataText">${ name == 'Ethereum' ? ((price)/100).toFixed(2) : ((price)).toFixed(2)}</div>
        </div>
        <div className="innerDiv">
            <div className="showData">
            {change()}
            <div className="perc">({priceChange.toFixed(2)}%)</div>
            </div>
            
        </div>
        </>
)
}

export default Data
