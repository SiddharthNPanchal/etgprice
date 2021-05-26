import React, { useEffect, useState } from 'react'
import "../styles/calc.css"

function Calc({coin}) {

    const [name, setName] = useState('') 
    useEffect(()=>{
        if(coin.symbol === 'eth')
        {
            setName('ETG')
        }
        else{
            setName(coin.symbol)
        }
        
    })
    // alert(price)
    const [usd, setUsd] = useState(0)
    const [eth, setEth] = useState(0)

    const changeUsd = (e) => {
        setEth(e)
        if(name === 'ETG'){
            setUsd((e * coin.current_price/100).toFixed(2))
        }
        else{
            
            setUsd((e * coin.current_price).toFixed(2))
        }
        
        
    }

    const changeEth = (e) => {  
        setUsd(e)
        if(name==='eth'){
            // setName('ETG')
            setEth((e/(coin.current_price/100)).toFixed(2))
        }
        else{
            // setName(coin.symbol)
            setEth(e/(coin.current_price).toFixed(2))
        }
        
        
    }

    return (
        <div style={{backgroundColor:'#2b2b2b', alignItems:'center'}}>
            <div className="calc">
             
                    <div className="elements">
                        <div className="label">{name.toUpperCase()}</div>
                        <input className="input"  onChange={e => changeUsd(e.target.value)} value={eth}/>
                    </div>
                    <div className="elements">
                        <div className="label">USD</div>
                        <input className="input"  onChange={e => changeEth(e.target.value)} value={usd}/>
                    </div>
            
                

            </div>
        </div>
    )
}

export default Calc
