
'use client'

import { useEffect } from "react";
import ClientSection from "./clientSection";
import Footer from "./footer";
import axios from "axios";


const ClientComponent = () => {

    console.log('hello i am client component')
    let isServer = (typeof window === 'undefined')? false : true;
    console.log(isServer, 'is client')

    useEffect(()=>{
        axios.get('http://195.35.45.131:4000/user?all=true').then((res)=>{
            console.log(res, 'RESPONSE')
        })

    })

    return(
    <>
        <div className="hero_area">
            <header className="header_section">
                <div className="container-fluid">
                    <div className="navbar navbar-expand-lg custom_nav-container">
                        <a className="navbar-brand">
                            <span></span>
                        </a>
                    </div>
                </div>
            </header>
            <section className="slider_section ">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="detail-box">
                            <h1>
                                Client Side Rendered Component
                            </h1>
                            <p>
                                when looking at its layout. The point of using Lorem Ipsum
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
        <ClientSection/>
        <Footer/>
    </>
    )
}


export default ClientComponent;