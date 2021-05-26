import React, { useState } from 'react';
import "../../styles/header.css"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SidebarData } from '../SidebarData';
import { CoinbarData } from '../CoinbarData';
import { Link } from 'react-router-dom';
import logo from "../../assets/ethereum-price-logo.png"

function Header() {
    
    const [sidebar, setSidebar] = useState(false)    

    const [coinbar, setCoinbar] = useState(false)
    
    const showSidebar = () => setSidebar(!sidebar);

    const menuItem = (e) => {
        if(e == 'Coins'){
            setCoinbar(true)
        }
        else if(e == 'Ranking'){
            window.location.href = '/ranking'
        }
        else{
            alert("Coming soon")
        }
    }

    const showCoinbar = () => {
        if(coinbar==false){
            setCoinbar(true)
        }
        else{
            setCoinbar(false)
        }
    }

    return (

        <div className="mainDiv">
            <div className="img">
                <Link to="/"><img className="logo" src={logo} alt="Logo"/></Link>
            </div>
            <div className="time">
                <Link to='/Bitcoin'><div style={{color:'white', margin:'10px'}}>24H</div></Link>
                <Link to='/btcweek'><div style={{color:'white', margin:'10px'}}>1W</div></Link>
                <Link to='/btcyear'><div style={{color:'white', margin:'10px'}}>1Y</div></Link>
            </div>

            <div className="menu">

                <Link to="/buy-etg"><button className="button1">BUY ETG</button>&nbsp;&nbsp;</Link>
                <IconContext.Provider value={{ color: '#fff'}}>
                    <div className='navbar'>
                        <FaIcons.FaBars className="bar" onClick={showSidebar}/>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' >
                        <AiIcons.AiFillCloseCircle className="close" onClick={showSidebar}/>
                            {SidebarData.map((item, index) => {
                            return (
                              <li key={index} className={item.cName}>
                                  <div className="itemTitle"onClick={()=> menuItem(item.title)}>{item.title}</div>
                              </li>
                            );
                            })}
                        </ul>
                    </nav>
                    <nav className={coinbar ? 'coin-menu active' : 'nav-menu'}>
                        <ul className='coin-menu-items' >
                        <AiIcons.AiFillCloseCircle className="close" onClick={showCoinbar}/>
                            {CoinbarData.map((item, index) => {
                            return (
                              <li key={index} className={item.cName}>
                                  <Link to={item.title}><div className="itemTitle">{item.title}</div></Link>
                              </li>
                            );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
               
            </div>
            
        </div>
    )
}

export default Header
