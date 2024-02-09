import React from 'react'
import Footer from './footer';


export async function ServerComponent (){


    console.log('hello i am server component')

    let isServer = (typeof window === 'undefined')? false : true;
    console.log(isServer, 'is Server')

    return(
        <>
        <div>
            <header className="header_section">
                <div className="container-fluid">
                    <div className="navbar navbar-expand-lg custom_nav-container">
                        <a className="navbar-brand">
                            <span style={{paddingLeft:'40px', color:'black'}}>NeXtJS SSR</span>
                        </a>
                    </div>
                </div>
            </header>
            <section className="slider_section ">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="detail-box" >
                                <h1 style={{color:'black'}}> Server Side Rendered Component</h1>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        </>
    )
}