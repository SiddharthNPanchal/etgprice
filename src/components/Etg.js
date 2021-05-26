import React from 'react'
import "../styles/Etg.css"
import discord from "../assets/discord.png"
import reddit from "../assets/reddit.png"
import Instagram from "../assets/instagram.png"
import LinkedIn from "../assets/linkedIn.png"
import Telegram from "../assets/telegram.png"
import Twitter from "../assets/twitter.jpg"
import TikTok from "../assets/TikTok.png"
import Facebook from "../assets/facebook.png"
import { Redirect } from 'react-router'


function Etg() {

    const etgArray = [
        {
            logo : discord,
            tag: "Discord Server",
            tagline: "ETG participants are most active on our Discord Server.",
            buttonText: "Join our Discord Server",
            link:''
        },
        {
            logo : reddit,
            tag: "Reddit",
            tagline: "Join the millions of viewers discovering content and creators on TikTok.",
            buttonText: "Join us on Reddit",
            link:'https://www.reddit.com/user/ethereumgenesys'
        },
        {
            logo : TikTok,
            tag: "TikTok",
            tagline: "ETG participants are most active on our Discord Server.",
            buttonText: "Follow us on TikTok",
            link:''
        },
        {
            logo : Twitter,
            tag: "Twitter",
            tagline: "ETG tweets all upcoming updates and news.",
            buttonText: "Follow us on Twitter",
            link:'https://twitter.com/EthereumGenesys'
        },
        {
            logo : Facebook,
            tag: "Facebook",
            tagline: "Like our page and show your support.",
            buttonText: "Like us on Facebook.",
            link:'https://www.facebook.com/ethereumgenesys/'
        },
        {
            logo : Instagram,
            tag: "Instagram",
            tagline: "Follow our IG to get our latest news.",
            buttonText: "Follow us on Instagram",
            link:'https://www.instagram.com/ethereumgenesys/'
        },
        {
            logo : Telegram,
            tag: "Telegram",
            tagline: "Coming Soon.",
            buttonText: "Coming Soon",
            link:''
        },
        {
            logo : LinkedIn,
            tag: "LinkedIn",
            tagline: "Latest job posts and upcoming events.",
            buttonText: "Follow us on LinkedIn",
            link:'https://www.linkedin.com/company/ethereumgenesys/'
        }
    ]

    const redirectTo = (e) =>{
        if(e==''){

        }
        else{
            window.location.href = e
        }
    }

    return (
        <div>
            <div className="etgMain">
                {
                    etgArray.map(i=>{
                        return(
                            <div className="child">
                            <img src = {i.logo} height='40px' width='45px'/>
                            <div className="tag">
                                {i.tag}
                            </div>
                            <div className="tagline">
                                {i.tagline}
                            </div>
                            <button className="button1" style={{fontFamily:"fira-sans"}} onClick={()=>redirectTo(i.link)}>{i.buttonText}</button>
                        </div>
                        )
                    })
                }
                
               
            </div>
        </div>
    )
}

export default Etg
