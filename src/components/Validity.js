import React from 'react'
import * as FaIcons from 'react-icons/fa';
import val from "../assets/validity550.png"
import "../styles/validity.css"
function Validity() {
    return (
        <div className="validitymain">
            <div className="validity">
                <div style={{opacity:"1", marginTop:"120px"}} >
                    <img src={val} height="30px" width="120px"/>
                </div>

                <button className="but">Subscribe for free</button>&nbsp;

                <div className="validityDetail">
                Validity is the official newsletter of EthereumPrice.org. Sent weekly.
                    </div>
        </div>
        </div>
        
    )
}

export default Validity
