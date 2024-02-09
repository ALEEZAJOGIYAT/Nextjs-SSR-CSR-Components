'use client'

import Image from "next/image";
import ClientSection from "./clientSection";
import Footer from "./footer";


const ClientComponent = () => {
    return(
    <>
        <div className="hero_area">
            <header className="header_section">
                <div className="container-fluid">
                    <div className="navbar navbar-expand-lg custom_nav-container">
                        <a className="navbar-brand">
                            <span>NeXtJS CSR</span>
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