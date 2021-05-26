import React from 'react'
import "../styles/org.css"
function org() {
    return (
        <div className="org">
            <div className="orgDetails">
                <div style={{color:"#cdcdcd", fontWeight:"bold", fontSize: '25px', fontFamily:'fira-sans'}}>
                ETHEREUMPRICE.ORG
                </div>

                <div className="orgInfo">
                    <div className="orgDetail"> 
                    This website is intended to provide a clear summary of Ethereum's current and historical price as well as important updates from the industry. Ethereum ERC20 token prices can also be found in the menu options along with other coin data such as BTC, XRP and others. Prices are updated every minute in real-time and the open/close prices are recorded at midnight UTC.
                    </div>

                    <div className="orgDetail">
                    <b>Important Disclaimer</b>: All data, external references, blogs and other forms of content ("content") on ethereumprice.org are for information purposes only. We make no warranties about the accuracy of this content and nor does the content constitute financial advice or legal advice. Any use or reliance on this content is made solely at your own risk and discretion.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default org
