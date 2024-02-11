
'use client' 
import React from "react"


const Header = ({title}) => {
    console.log('headerrrrrrrrr')
    return(
        <header className="header_section">
            <div className="container-fluid">
                <div className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand">
                        <span style={{paddingLeft:'40px', color:'black'}}>{title}</span>
                    </a>
                </div>
            </div>
        </header>
    )
}


export default Header