import React from 'react'
import {Link} from "react-router-dom"
import "../styles/footer.css"
import logo from "../assets/ethereum-price-logo.png"
function Footer() {
 
    return (
        <div className="maindiv" style={{backgroundColor:'#2b2b2b'}}>
            <div className="items" style={{backgroundColor:'#2b2b2b'}}>
                <div className="firstDiv">
                    <img src={logo} alt="Logo" height="40px" width="100px"/>
                    {/* <div style={{marginTop:"7.5px", fontFamily:"sans-serif", fontSize:"20px"}}>&nbsp;&nbsp;ethereumprice</div> */}
                </div>

                <div className="subitem">
                    <p style={{color:"white", fontWeight: '600', fontFamily:'fira-sans'}}>Navigation</p>
                    
                    <span>Ethereum Price</span>
                    
                    <span>Tokens</span>
                    
                    <span>Charts</span>
                   
                    <span>Guides</span>
                </div>

                <div className="subitem">
                <p style={{color:"white", fontWeight: '600',  fontFamily:'fira-sans'}}>Info</p>
                    
                    <span>Contact</span>
                    
                    <span>Careers</span>
                    
                    <span>Data & Methedology</span>
                    
                    <span>Privacy & Cookis</span>
                </div>
                <div className="subitem">
                <p style={{color:"white", fontWeight: '600',  fontFamily:'fira-sans'}}>Social</p>
                    
                    <span>Follow on Twitter</span>
                    <span>Chat on discord</span>
                </div>
            </div>
        </div>
    )
}

export default Footer